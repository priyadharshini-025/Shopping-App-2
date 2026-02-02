import { use } from "react"
import { useNavigate } from "react-router-dom"

function NavBar({ cartLen }) {
    let navigate = useNavigate()
    return (
        <div className="nav-bar">
            <h2 className="heading">Shopping Site</h2>
            <button onClick={() => navigate("/cart")} className="cartButton">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart ({cartLen})</button>
        </div>
    )
}

export default NavBar