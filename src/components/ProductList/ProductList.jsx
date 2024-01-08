import "./ProductList.css";

const ProductList = ({children}) => {

    return ( 
        <div className="product-list">
            <div className="product-list-header">
                <h2>Available products</h2>
            </div>
            <div className="product-list-body">
            <table className="product-table">
            <thead>
                <tr className="product-table-header">
                    <th>No. </th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
            </div>
        </div>
        
     );
}
 
export default ProductList;