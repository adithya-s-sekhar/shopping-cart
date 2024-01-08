const Header = () => {
    return ( 
        <div className="header">
            <div className="header-logo">
                <h1>Shopping Site</h1>
            </div>
            <div className="header-actions">
                <div className="cart">
                    <div className="cart-label">
                        <h2>Cart:</h2>
                    </div>
                    <div className="cart-items">
                        <h2>0</h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Header;