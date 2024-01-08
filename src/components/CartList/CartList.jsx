import { useSelector } from "react-redux";
import "./CartList.css";
import CartItem from "./CartItem/CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";

const CartList = ({ children }) => {
  const cartProducts = useSelector((store) => store.cart.products);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-list">
      <div className="cart-list-header">
        <div className="cart-list-header-title">Your cart:</div>
        <div className="cart-list-header-count">
          {cartProducts.length} items
        </div>
      </div>
      <div className="cart-list-body">
        <table className="cart-list-body">
          <thead>
            <tr>
              <th>No. </th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, index) => (
              <CartItem product={product} index={index + 1} key={index} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-list-footer">
        <div className="cart-list-footer-button">
          <button className="clear-cart-button" onClick={handleClick}>
            Clear Cart
          </button>
        </div>
        <div className="cart-list-footer-total">Total: todo</div>
      </div>
    </div>
  );
};

export default CartList;
