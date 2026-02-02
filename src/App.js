import { useState, useEffect } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import "./App.css"

import Layout from "./layout/Layout"
import Home from "./components/Home"
// import NavBar from "./components/NavBar"
// import ProductList from "./components/ProductList"
import CartModal from "./components/CartModal"

function App() {
  // to maintain the list of products to show in UI
  const [product, setProduct] = useState([]);
  // to maintain the products that are added by user in the cart
  const [cart,setCart] = useState([]);
  //to open the cartModal if the user clicks Cart
  // const [iscartOpen,setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // setProduct(data.products)
        setProduct(data)
        setLoading(false)
      }
      )
      .catch(() => {
      setError("Failed to load products");
      setLoading(false);
    });
  }, [])

  // useEffect(() => {
  //   document.body.style.overflow = iscartOpen ? "hidden" : "auto";
  // }, [iscartOpen]);

  const addToCart = (product)=>{
    console.log("addToCart fn")
    setCart(prevCart=>{
      let exists  = prevCart.find(item => (product.id===item.id))

      if(exists)
      {
        return(prevCart.map((item)=>(
          item.id === product.id ? {...item,qty:item.qty+1} : item
        )))
      }
      //if its new product add to the previous cart with quantity 1
      return [...prevCart, {...product,qty:1}]
    }) 
  }

  const incrementCart = (id) =>{
    console.log("incrementCart")
    setCart(
      prevCart => {
        return(
          prevCart.map(item=>(
            item.id === id? {...item,qty:item.qty+1} : item
          ))
        )
      }
    )
  }

  const decrementCart = (id) =>{
    setCart(prevCart=>{
      return(
        prevCart
        .map(
          item=>
          (
            item.id === id ? {...item,qty:item.qty-1}: item
          )
        )
        .filter(item=> item.qty>0)
      )
    }
    )
  }

  const removeFromCart = (id) =>{
    setCart(cart.filter(item=>item.id!==id))
  }

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout cartLen={cart.length}/>}>
        <Route index element={<Home loading={loading} error={error} 
              product={product} addToCart={addToCart} removeFromCart={removeFromCart} cart = {cart}/>}
        />
        <Route path="cart" element={<CartModal cart = {cart} removeFromCart = {removeFromCart} incrementCart={incrementCart} decrementCart={decrementCart}/>}
        />
      </Route>
    </Routes>
    {/* <NavBar cart={cart.length} iscartOpen={()=>setIsCartOpen(true)}/>
    
    {loading && <p style={{ textAlign: "center" }}>Loading products...</p>}
    {error && <p style={{ textAlign: "center" ,color: "red",fontWeight:"bold" }}>{error}</p>}
     {!loading && !error && (
        <ProductList product={product} addToCart={addToCart} />
      )}
    </div>
    {iscartOpen && <CartModal
    cart = {cart}
    removeFromCart = {removeFromCart}
    iscartOpen = {()=>setIsCartOpen(false)}
    />} */}
    </BrowserRouter>
    
  )
}

export default App