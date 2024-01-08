import { useSelector } from "react-redux";
import "./CartItem.css";

const CartItem = ({ product, index }) => {
  return (
    <tr className="cart-item">
      <td>{index}</td>
      <td>{product.name}</td>
      <td>todo</td>
      <td>{product.price}</td>
      <td>todo</td>
    </tr>
  );
};

export default CartItem;
