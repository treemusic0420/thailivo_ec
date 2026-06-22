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
    // Verified live Stripe URL.
    paymentLink: 'https://buy.stripe.com/6oU5kveHY1cOf28g034Rq05',
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

const footerMarkup = `
  <footer class="site-footer">
    <div class="container footer-inner">
      <a class="footer-logo" href="/">ThaiLivo</a>
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="/legal">特定商取引法に基づく表記</a>
        <a href="/#shipping">配送について</a>
        <a href="/#returns">返品・交換について</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMxKoclv4u-umM-q7FbxdrvCK5RcTDRU20Jr6PiLBb3nJLMA/viewform" target="_blank" rel="noopener noreferrer">お問い合わせフォーム</a>
      </nav>
    </div>
  </footer>
`;

const legalPageMarkup = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="/">ThaiLivo</a>
      <nav aria-label="Main navigation">
        <a href="/">Top</a>
        <a href="/#products">商品</a>
        <a href="/#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="top" class="legal-page">
    <section class="section legal-page-section">
      <div class="container">
        <article class="info-card legal-page-card">
          <p class="eyebrow">Legal</p>
          <h2>特定商取引法に基づく表記</h2>
          <dl class="legal-list">
            <div><dt>販売事業者</dt><dd>ThaiLivo</dd></div>
            <div><dt>運営責任者</dt><dd>藤田 正</dd></div>
            <div><dt>所在地</dt><dd>ご請求があった場合、遅滞なく開示いたします。</dd></div>
            <div><dt>電話番号</dt><dd>ご請求があった場合、遅滞なく開示いたします。</dd></div>
            <div><dt>お問い合わせ</dt><dd>お問い合わせフォームよりご連絡ください。</dd></div>
            <div><dt>販売価格</dt><dd>各商品ページに表示された価格</dd></div>
            <div><dt>商品代金以外の必要料金</dt><dd>送料が発生する場合があります。</dd></div>
            <div><dt>支払方法</dt><dd>クレジットカード決済（Stripe）</dd></div>
            <div><dt>支払時期</dt><dd>ご注文時に決済されます。</dd></div>
            <div><dt>商品の引渡時期</dt><dd>ご注文確認後、通常3〜5営業日以内に発送いたします。</dd></div>
            <div><dt>返品・交換</dt><dd>商品に不備がある場合を除き、原則として返品・交換はお受けしておりません。</dd></div>
          </dl>
          <a class="primary-link back-to-top-link" href="/">トップページへ戻る</a>
        </article>
      </div>
    </section>
  </main>

  ${footerMarkup}
`;

const mainPageMarkup = `
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

    <section class="section lower-info-area" id="about">
      <div class="container lower-info-stack">
        <article class="info-card about-trust-card">
          <div class="about-trust-content">
            <div class="info-subsection">
              <p class="eyebrow">About</p>
              <h2>ThaiLivoについて</h2>
              <p>タイ在住経験を活かし、タイのライフスタイル商品を日本へ届ける小さなセレクトショップです。</p>
            </div>
            <div class="info-subsection" aria-labelledby="trust-notice-title">
              <p class="eyebrow">Secure Checkout</p>
              <h2 id="trust-notice-title">安心してご購入いただけます</h2>
              <p>お支払いはStripeの安全な決済ページで処理されます。</p>
              <p>ThaiLivoのサイト上ではクレジットカード情報を保持しません。</p>
              <p class="trust-note">ご注文後、Stripeの決済完了メールが送信されます。</p>
            </div>
          </div>
          <div class="trust-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" focusable="false">
              <path d="M32 6 52 14v15c0 13.6-8.1 24.2-20 29-11.9-4.8-20-15.4-20-29V14L32 6Z" />
              <path d="m23.5 31.5 5.6 5.6 12-13" />
            </svg>
          </div>
        </article>

        <article class="info-card guide-card">
          <div class="guide-heading">
            <p class="eyebrow">Information</p>
            <h2>ご利用に関するご案内</h2>
          </div>
          <div class="guide-columns">
            <section class="guide-column" id="shipping">
              <p class="eyebrow">Shipping</p>
              <h3>配送について</h3>
              <p>ご注文確認後、通常3〜5営業日以内に発送いたします。</p>
              <p>配送方法・送料はご注文内容により異なる場合があります。</p>
              <p>発送後の配送状況については、必要に応じて個別にご案内いたします。</p>
            </section>
            <section class="guide-column" id="returns">
              <p class="eyebrow">Returns</p>
              <h3>返品・交換について</h3>
              <p>食品・衛生用品を含む商品の性質上、お客様都合による返品・交換はお受けしておりません。</p>
              <p>商品違い、破損、不良などがあった場合は、商品到着後7日以内にお問い合わせフォームよりご連絡ください。</p>
              <p>確認のうえ、交換または返金にて対応いたします。</p>
            </section>
          </div>
        </article>

        <article class="info-card contact-card" id="contact">
          <div class="contact-copy">
            <p class="eyebrow">Contact</p>
            <h2>お問い合わせ</h2>
            <p>商品やご注文に関するお問い合わせは、以下のフォームよりご連絡ください。</p>
          </div>
          <a class="contact-button" href="https://docs.google.com/forms/d/e/1FAIpQLSdMxKoclv4u-umM-q7FbxdrvCK5RcTDRU20Jr6PiLBb3nJLMA/viewform" target="_blank" rel="noopener noreferrer">お問い合わせフォーム</a>
        </article>
      </div>
    </section>

  </main>

  ${footerMarkup}
`;

document.getElementById('root').innerHTML = window.location.pathname.replace(/\/$/, '') === '/legal' ? legalPageMarkup : mainPageMarkup;
