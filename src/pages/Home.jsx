import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className="home-page">
      <section className="landing-page">
        <div className="landing-container">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Fresh Botanical Collection
          </div>
          <h1 className="hero-title">🌿 Paradise Nursery</h1>
          <p className="hero-tagline">
            Where Greenery Meets Serenity — Hand-curated houseplants, vibrant succulents,
            and fragrant herbs to bring natural beauty and calm into your living space.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="get-started-btn">
              Get Started — Shop Plants
            </Link>
          </div>
          <div className="hero-highlights">
            <div className="highlight-pill">
              <span className="highlight-icon">🌱</span>
              <span>24+ Healthy Varieties</span>
            </div>
            <div className="highlight-pill">
              <span className="highlight-icon">🪴</span>
              <span>Beginner Friendly</span>
            </div>
            <div className="highlight-pill">
              <span className="highlight-icon">✨</span>
              <span>100% Plant Guarantee</span>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
    </div>
  );
}
