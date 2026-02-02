import ProductCard from "./ProductCard"
function ProductList({ product, addToCart,removeFromCart, cart }) {

    console.log("product in productlist ", product)
    return (
        <div className="all-cards" >
            {product.map(item => (
                <ProductCard product={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} isInCart={cart.some(CartItem=> CartItem.id === item.id)}/>
            ))}
        </div>
    )
}

export default ProductList