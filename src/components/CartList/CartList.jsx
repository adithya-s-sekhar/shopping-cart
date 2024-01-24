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

  let tmpCart = [...cartProducts];

  tmpCart = tmpCart.map(item => ({
    ...item,
    count: 1
  }));

  const displayCart = [];

  for (const obj of tmpCart) {
    const indexA = displayCart.findIndex(item => item.id === obj.id);
    if (indexA !== -1){
        displayCart[indexA].count += obj.count;
    } else {
        displayCart.push({...obj});
    }
  }

  let totalCart = 0;

  displayCart.map((item) => totalCart = totalCart + (item.price*item.count))

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
            {displayCart.map((product, index) => (
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
        <div className="cart-list-footer-total">Total: {totalCart}</div>
      </div>
    </div>
  );
};

export default CartList;
