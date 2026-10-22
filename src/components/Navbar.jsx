import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

export default function Navbar() {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">🌿</span>
          <span className="navbar-logo-text">Paradise Nursery</span>
        </Link>
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
              >
                Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
                aria-label={`Shopping cart with ${cartQuantity} items`}
              >
                <svg
                  className="cart-icon-svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                <span className="cart-text">Cart</span>
                <span className="cart-count">{cartQuantity}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
