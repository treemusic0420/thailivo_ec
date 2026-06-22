const products = [
  {
    id: 1,
    name: 'タイハーブのお風呂 120g（40g×3袋）',
    price: '¥600',
    description: 'レモングラスやこぶみかんの葉を思わせる、深呼吸したくなるハーブバス。',
    stock: 5,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
    paymentLink: 'https://buy.stripe.com/7sY8wHfM26x807eg034Rq00',
  },
  {
    id: 2,
    name: 'タイハーブのお風呂 業務用600g（40g×15袋）',
    price: '¥2,390',
    description: '毎日のリラックスタイムやサロン利用にうれしい大容量サイズ。',
    stock: 3,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    imagePosition: 'image-position-top',
    paymentLink: 'https://buy.stripe.com/6oU14fczQ5t4aLSg034Rq02',
  },
  {
    id: 3,
    name: 'レモングラス＆パンダンリーフティー 250g　※特価',
    price: '¥900',
    description: '爽やかなレモングラスと甘い香りのパンダンを合わせたノンカフェインティー。',
    stock: 3,
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=900&q=80',
    paymentLink: 'https://buy.stripe.com/bJe8wHgQ608KdY43dh4Rq03',
  },
  {
    id: 4,
    name: 'バタフライピーティー 250g　※特価',
    price: '¥1,090',
    description: '鮮やかな青色が美しい、タイらしい彩りを楽しめるハーブティー。',
    stock: 3,
    image: 'https://images.pexels.com/photos/34439027/pexels-photo-34439027.jpeg?cs=srgb&dl=pexels-masuma-rahaman-437541976-34439027.jpg&fm=jpg',
    imagePosition: 'image-position-top',
    // Verified live Stripe URL. Keep uppercase L in fm5Lp4Rq04.
    paymentLink: 'https://buy.stripe.com/5kQ28jeHYf3E2fm5Lp4Rq04',
  },
  {
    id: 5,
    name: 'パパイヤ葉茶 250g',
    price: '¥2,190',
    description: 'すっきりとした飲み口で、日々のウェルネス習慣に寄り添うお茶。',
    stock: 3,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    imagePosition: 'image-position-center',
    paymentLink: 'https://buy.stripe.com/aFadR1dDU4p0g6c7tx4Rq01',
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
    <div class="product-image-frame product-card-image-container">
      <img class="product-card-image ${escapeHtml(product.imagePosition ?? '')}" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}の商品画像" loading="lazy" onerror="this.closest('.product-image-frame').classList.add('is-missing'); this.remove();" />
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

document.getElementById('root').innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="#top">ThaiLivo</a>
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
        <a class="hero-card" href="#products" aria-label="ThaiLivoの商品を見る">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1000&q=80" alt="Thai lifestyle goods" />
          <div class="hero-tags" aria-hidden="true">
            <span>Herbs</span>
            <span>Tea</span>
            <span>Home</span>
          </div>
        </a>
      </div>
    </section>

    <section class="section products-section" id="products">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Products</p>
          <h2>タイの香りを、暮らしのそばに。</h2>
        </div>
        <div class="product-grid">
          ${products.map(renderProductCard).join('')}
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container info-card">
        <p class="eyebrow">About</p>
        <h2>ThaiLivoについて</h2>
        <p>タイ在住経験を活かし、タイのライフスタイル商品を日本へ届ける小さなセレクトショップです。</p>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container info-card">
        <p class="eyebrow">Contact</p>
        <h2>お問い合わせ</h2>
        <p>商品やご注文に関するご相談はメールでお気軽にお問い合わせください。</p>
        <a href="mailto:hello@thailivo.example">hello@thailivo.example</a>
      </div>
    </section>
  </main>
`;
