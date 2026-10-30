
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/CartSlice';
import { Navbar } from './ProductList';
import './CartItem.css';

export default function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleIncreaseQuantity = (productId) => {
    dispatch(cartActions.increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(cartActions.decreaseQuantity(productId));
  };

  const handleRemoveItem = (productId) => {
    dispatch(cartActions.removeFromCart(productId));
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon! ✨');
  };

  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      <div className="cart-page">
        <div className="cart-container">

          <div className="cart-header">
            <span className="cart-eyebrow">Your Bag</span>
            <h1 className="cart-title">Shopping Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div
                className="empty-icon"
                role="img"
                aria-label="Empty cart"
              >
                🪴
              </div>

              <p className="empty-message">
                Your cart is empty!
              </p>

              <p className="empty-subtext">
                Browse our nursery collection and select some greenery
                to brighten your home.
              </p>

              <Link
                to="/products"
                className="continue-shopping-btn"
              >
                Start Shopping Plants
              </Link>
            </div>
          ) : (
            <div className="cart-content">

              <div className="cart-items">
                <div className="items-header">
                  <h2 className="items-title">
                    Cart Items ({totalQuantity})
                  </h2>

                  <span className="items-count-badge">
                    {totalQuantity}{' '}
                    {totalQuantity === 1 ? 'plant' : 'plants'} selected
                  </span>
                </div>

                <div className="items-list">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">

                      <div
                        className="item-image"
                        role="img"
                        aria-label={item.name}
                      >
                        {item.image}
                      </div>

                      <div className="item-details">
                        <h3 className="item-name">
                          {item.name}
                        </h3>

                        <p className="item-price">
                          Unit Price: ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="item-quantity">
                        <button
                          className="qty-btn minus"
                          onClick={() => handleDecreaseQuantity(item.id)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>

                        <span
                          className="qty-display"
                          aria-label={`Quantity: ${item.quantity}`}
                        >
                          {item.quantity}
                        </span>

                        <button
                          className="qty-btn plus"
                          onClick={() => handleIncreaseQuantity(item.id)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <div className="item-total">
                        <span className="total-label">
                          Total:
                        </span>

                        <span className="total-price">
                          ${item.totalPrice.toFixed(2)}
                        </span>
                      </div>

                      <button
                        className="delete-btn"
                        onClick={() => handleRemoveItem(item.id)}
                        title="Remove from cart"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <svg
                          className="delete-icon"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>

                    </div>
                  ))}
                </div>
              </div>

              <aside
                className="cart-summary"
                aria-label="Order summary"
              >
                <h2 className="summary-title">
                  Order Summary
                </h2>

                <div className="summary-rows">

                  <div className="summary-item">
                    <span className="summary-label">
                      Total Items:
                    </span>

                    <span className="summary-value">
                      {totalQuantity}
                    </span>
                  </div>

                  <div className="summary-item">
                    <span className="summary-label">
                      Subtotal:
                    </span>

                    <span className="summary-value">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>

                  <div className="summary-item shipping">
                    <span className="summary-label">
                      Shipping:
                    </span>

                    <span className="summary-value shipping-value">
                      Free
                    </span>
                  </div>

                  <div className="summary-total">
                    <span className="grand-total-label">
                      Grand Total:
                    </span>

                    <span className="grand-total-price">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>

                </div>

                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout (Coming Soon)
                </button>

                <Link
                  to="/products"
                  className="continue-shopping-link"
                >
                  ← Continue Shopping
                </Link>

              </aside>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
