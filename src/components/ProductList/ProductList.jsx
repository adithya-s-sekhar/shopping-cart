import "./ProductList.css";

const ProductList = ({children}) => {
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
        </table>
     );
}
 
export default ProductList;