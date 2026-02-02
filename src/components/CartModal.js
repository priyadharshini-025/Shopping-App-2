import { useNavigate } from "react-router-dom"

function CartModal({ cart, removeFromCart,incrementCart,decrementCart }) {
    console.log("cart model")
    let navigate = useNavigate()
    const total = cart.reduce((sum,product)=>sum+(product.qty*product.price),0)
    const discount = (total *10)/100
    const discountedTotal = total - discount
    return (
        <div className="cartModal">
            <div className="cartItems">
                {cart.length === 0 && <p>No items added in the cart</p>}
                {cart.length !== 0 && cart.map((product) => (
                    <div className="cart-item" key={product.id}>
                        {/* <img src={product.images[0]} alt={product.title || 'Cart item'} />                         */}
                        <img src={product.image} alt={product.title || 'Cart item'} />
                        <p>{product.title}</p>
                        <p><b>&#8377; {product.price}</b></p>
                        <div className="updationBtn">
                        <button className= "updateCart" onClick={()=>decrementCart(product.id)}>-</button>
                        <p>{product.qty}</p>
                        <button className= "updateCart" onClick={()=>incrementCart(product.id)}>+</button>
                        </div>
                        <button className="remove-button" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                    </div>
                ))}
                {cart.length>0 &&
                <div>
                <p>Total: <strike> &#8377; {total} </strike></p>
                <p>Final price: &#8377; {discountedTotal}</p>
                </div>
                }
                <button className="close-button" onClick={()=>navigate(-1)}>Close</button>
            </div>

        </div>
    )
}

export default CartModal