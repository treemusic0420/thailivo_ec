const products = [
  {
    id: 1,
    name: 'タイハーブのお風呂 120g',
    price: '¥1,280',
    description: 'レモングラスやこぶみかんの葉を思わせる、深呼吸したくなるハーブバス。',
    stock: 18,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
    paymentLink: 'https://buy.stripe.com/test_thailivo_herb_bath_120g',
  },
  {
    id: 2,
    name: 'タイハーブのお風呂 業務用600g',
    price: '¥4,980',
    description: '毎日のリラックスタイムやサロン利用にうれしい大容量サイズ。',
    stock: 7,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    paymentLink: 'https://buy.stripe.com/test_thailivo_herb_bath_600g',
  },
  {
    id: 3,
    name: 'レモングラス＆パンダンリーフティー',
    price: '¥980',
    description: '爽やかなレモングラスと甘い香りのパンダンを合わせたノンカフェインティー。',
    stock: 24,
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=900&q=80',
    paymentLink: 'https://buy.stripe.com/test_thailivo_lemongrass_pandan',
  },
  {
    id: 4,
    name: 'バタフライピーティー',
    price: '¥1,080',
    description: '鮮やかな青色が美しい、タイらしい彩りを楽しめるハーブティー。',
    stock: 16,
    image: './src/assets/butterfly-pea-tea.svg',
    paymentLink: 'https://buy.stripe.com/test_thailivo_butterfly_pea',
  },
  {
    id: 5,
    name: 'パパイヤ葉茶',
    price: '¥1,180',
    description: 'すっきりとした飲み口で、日々のウェルネス習慣に寄り添うお茶。',
    stock: 13,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    paymentLink: 'https://buy.stripe.com/test_thailivo_papaya_leaf',
  },
];

const escapeHtml = (value) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };

    return entities[character];
  });

const renderProductCard = (product) => `
  <article class="product-card">
    <div class="product-image-frame">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}の商品画像" loading="lazy" onerror="this.closest('.product-image-frame').classList.add('is-missing'); this.remove();" />
    </div>
    <div class="product-body">
      <div>
        <h3>${escapeHtml(product.name)}</h3>
        <p class="description">${escapeHtml(product.description)}</p>
      </div>
      <div class="product-meta">
        <strong>${escapeHtml(product.price)}</strong>
        <span>在庫数: ${product.stock}</span>
      </div>
      <a class="buy-button" href="${escapeHtml(product.paymentLink)}" target="_blank" rel="noreferrer">購入する</a>
    </div>
  </article>
`;

const app = document.querySelector('#root');

if (!app) {
  throw new Error('Root element #root was not found.');
}

app.innerHTML = `
  <header class="site-header" aria-label="ThaiLivo site header">
    <div class="container header-inner">
      <a class="logo" href="#top" aria-label="ThaiLivo home">ThaiLivo</a>
      <nav aria-label="Main navigation">
        <a href="#products">商品</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Thai Lifestyle Select</p>
          <h1>ThaiLivo</h1>
          <h2>Curated Goods from Thailand</h2>
          <p class="lead">タイで見つけたお茶・ハーブ・生活雑貨をお届けします</p>
          <a class="primary-link" href="#products">商品を見る</a>
        </div>
        <a class="hero-card" href="#products" aria-label="商品一覧を見る">
          <span>Herbs</span>
          <span>Tea</span>
          <span>Home</span>
        </a>
      </div>
    </section>

    <section class="section container" id="products">
      <div class="section-heading">
        <p class="eyebrow">Products</p>
        <h2>タイの香りを、暮らしのそばに。</h2>
      </div>
      <div class="product-grid">
        ${products.map(renderProductCard).join('')}
      </div>
    </section>

    <section class="section container about" id="about">
      <p class="eyebrow">About</p>
      <h2>ThaiLivoについて</h2>
      <p>タイ在住経験を活かし、タイのライフスタイル商品を日本へ届ける小さなセレクトショップです。</p>
    </section>

    <section class="section container contact" id="contact">
      <p class="eyebrow">Contact</p>
      <h2>お問い合わせ</h2>
      <p>商品やご注文に関するご相談はメールでお気軽にお問い合わせください。</p>
      <a href="mailto:hello@thailivo.example">hello@thailivo.example</a>
    </section>
  </main>
`;
