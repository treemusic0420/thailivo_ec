import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');

await rm(dist, { force: true, recursive: true });
await mkdir(join(dist, 'src'), { recursive: true });

const html = await readFile(join(root, 'index.html'), 'utf8');
await writeFile(join(dist, 'index.html'), html.replace('/src/main.js', './src/main.js'));
await cp(join(root, 'src', 'main.js'), join(dist, 'src', 'main.js'));
await cp(join(root, 'src', 'styles.css'), join(dist, 'src', 'styles.css'));
