function ProductCard({product,addToCart,removeFromCart,isInCart})
{
    return(
        <div className="product-card">
            {/* <img src={product.images[0]} alt={product.title || 'Product image'} /> */}
            <img src={product.image} alt={product.title || 'Product image'} />
            <p className="productTitle">{product.title}</p>
            <p className="productPrice"><b>&#8377; {product.price}</b></p>
            <p className="description">{product.description}</p>
            {isInCart ?
                <button className="remove-from-cart" onClick={() => removeFromCart(product.id)}>Remove from Cart</button> :
                <button className="add-to-cart" onClick={()=>addToCart(product)}>Add to Cart</button>
            }
        </div>
    )
}

export default ProductCard