import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../app/store';
import { incrementQty, decrementQty, removeFromCart } from '../features/cart/cartSlice';
import styles from '../styles/Cart.module.css';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <div>
                  <button onClick={() => dispatch(decrementQty(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${getTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
