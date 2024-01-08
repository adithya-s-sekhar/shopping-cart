const ProductItem = ({product}) => {
    return ( 
        <div className="product-item">
            <div className="product-name">
                {product.name}
            </div>
            <div className="product-price">
                {product.price}
            </div>
            <div className="product-action">
                <button>
                    Add to Cart
                </button>
            </div>
        </div>
     );
}
 
export default ProductItem;