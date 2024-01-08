const ProductList = ({children}) => {
    return ( 
        <div className="product-list">
            <div className="product-list-header">
                <div className="header-name">
                    Item
                </div>
                <div className="header-price">
                    Price
                </div>
                <div className="header-actions">
                    Actions
                </div>
            </div>
            {children}
        </div>
     );
}
 
export default ProductList;