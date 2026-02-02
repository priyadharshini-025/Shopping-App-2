import ProductList from "./ProductList"

function Home({ loading, error, product, addToCart ,removeFromCart,cart}) {
    return (
        <>
            {loading && <p style={{ textAlign: "center" }}>Loading products...</p>}
            {error && <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>{error}</p>}
            {!loading && !error && (
                <ProductList product={product} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
            )}
        </>
    )

}

export default Home