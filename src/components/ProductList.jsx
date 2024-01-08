const ProductList = ({children}) => {
    return ( 
        <table className="product-list">
            <tr className="product-list-header">
                <th>Item</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            {children}
        </table>
     );
}
 
export default ProductList;