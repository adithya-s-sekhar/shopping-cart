import { useSelector } from "react-redux";
import "./CartList.css";

const CartList = ({children}) => {
    const cartProducts = useSelector((store) => store.cart.products);

    return ( 
        <div className="cart-list">
            <div className="cart-list-header">
                <div className="cart-list-header-title">
                    Your cart: 
                </div>
                <div className="cart-list-header-count">
                    {cartProducts.length} items
                </div>
            </div>
            <div className="cart-list-body">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default CartList;