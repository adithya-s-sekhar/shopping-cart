import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/slices/cartSlice";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <tr className="product-item">
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => handleClick(product)}>Add to Cart</button>
      </td>
    </tr>
  );
};

export default ProductItem;
