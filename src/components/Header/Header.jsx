import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
    const cartProducts = useSelector((store) => store.cart.products);

    return ( 
        <div className="header">
            <div className="header-logo">
                <h1>Shopping Site</h1>
            </div>
            <div className="header-actions">
                <div className="header-cart">
                    <div className="header-cart-label">
                        <h2>Cart:</h2>
                    </div>
                    <div className="header-cart-items">
                        <h2>{cartProducts.length}</h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;