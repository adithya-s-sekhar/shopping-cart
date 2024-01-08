const ProductItem = ({product}) => {
    return ( 
        <tr className="product-item">
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><button>Add to Cart</button></td>
        </tr>
     );
}
 
export default ProductItem;