import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  stock: number;
  image: string;
  paymentLink: string;
};

const products: Product[] = [
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
    image: 'https://images.unsplash.com/photo-1607006483224-ff6d44e93a1a?auto=format&fit=crop&w=900&q=80',
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

function App() {
  return (
    <>
      <header className="site-header" aria-label="ThaiLivo site header">
        <a className="logo" href="#top" aria-label="ThaiLivo home">ThaiLivo</a>
        <nav aria-label="Main navigation">
          <a href="#products">商品</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Thai Lifestyle Select</p>
            <h1>ThaiLivo</h1>
            <h2>Curated Goods from Thailand</h2>
            <p className="lead">タイで見つけたお茶・ハーブ・生活雑貨をお届けします</p>
            <a className="primary-link" href="#products">商品を見る</a>
          </div>
          <div className="hero-card" aria-hidden="true">
            <span>Herbs</span>
            <span>Tea</span>
            <span>Home</span>
          </div>
        </section>

        <section className="section" id="products">
          <div className="section-heading">
            <p className="eyebrow">Products</p>
            <h2>タイの香りを、暮らしのそばに。</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={`${product.name}の商品画像`} />
                <div className="product-body">
                  <div>
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                  </div>
                  <div className="product-meta">
                    <strong>{product.price}</strong>
                    <span>在庫数: {product.stock}</span>
                  </div>
                  <a className="buy-button" href={product.paymentLink} target="_blank" rel="noreferrer">購入する</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <p className="eyebrow">About</p>
          <h2>ThaiLivoについて</h2>
          <p>タイ在住経験を活かし、タイのライフスタイル商品を日本へ届ける小さなセレクトショップです。</p>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>お問い合わせ</h2>
          <p>商品やご注文に関するご相談はメールでお気軽にお問い合わせください。</p>
          <a href="mailto:hello@thailivo.example">hello@thailivo.example</a>
        </section>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
