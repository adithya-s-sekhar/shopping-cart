import { useSelector } from "react-redux";
import "./CartItem.css";

const CartItem = ({ product, index }) => {
  return (
    <tr className="cart-item">
      <td>{index}</td>
      <td>{product.name}</td>
      <td>{product.count}</td>
      <td>{product.price*product.count}</td>
      <td>todo</td>
    </tr>
  );
};

export default CartItem;
