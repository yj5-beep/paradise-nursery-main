
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import CartItem from './pages/CartItem';
import './App.css';

function HomePage() {
  const [showProductList, setShowProductList] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    setShowProductList(true);
    navigate('/products');
  };

  return (
    <div className="home-page">
      <section className="landing-page">
        <div className="landing-container">
          <span className="hero-badge">
            Welcome to Paradise Nursery
          </span>

          <h1 className="hero-title">
            Welcome to Paradise Nursery
          </h1>

          <p className="hero-tagline">
            Bring nature closer to home with our beautiful collection
            of plants. Discover the perfect greenery to brighten your space.
          </p>

          <div className="hero-actions">
            <button
              className="get-started-btn"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>

        {showProductList && <ProductList />}
      </section>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
