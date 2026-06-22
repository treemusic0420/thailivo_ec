import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');

await rm(dist, { force: true, recursive: true });
await mkdir(join(dist, 'src'), { recursive: true });
await mkdir(join(dist, 'legal'), { recursive: true });

const html = await readFile(join(root, 'index.html'), 'utf8');
const builtHtml = html.replace('/src/main.js', './src/main.js');
await writeFile(join(dist, 'index.html'), builtHtml);
await writeFile(join(dist, 'legal', 'index.html'), builtHtml.replace('./src/main.js', '../src/main.js').replace('/src/styles.css', '../src/styles.css'));
await cp(join(root, 'src', 'main.js'), join(dist, 'src', 'main.js'));
await cp(join(root, 'src', 'styles.css'), join(dist, 'src', 'styles.css'));

const assetsDir = join(root, 'src', 'assets');
const hasAssetsDir = await stat(assetsDir)
  .then((stats) => stats.isDirectory())
  .catch((error) => {
    if (error.code === 'ENOENT') {
      return false;
    }

    throw error;
  });

if (hasAssetsDir) {
  await cp(assetsDir, join(dist, 'src', 'assets'), { recursive: true });
}
