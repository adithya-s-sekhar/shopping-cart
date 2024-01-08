import { useDispatch } from "react-redux";
import "./ProductList.css";
import { clearCart } from "../../redux/slices/cartSlice";

const ProductList = ({children}) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(clearCart());
    }

    return ( 
        <table className="product-list">
            <thead>
                <tr className="product-list-header">
                    <th>Item</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} align="right"><button onClick={handleClick}>Clear Cart</button></td>
                </tr>
            </tfoot>
        </table>
     );
}
 
export default ProductList;