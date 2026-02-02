import {Link,Outlet} from "react-router-dom"
import NavBar from "../components/NavBar"

function  Layout({cartLen,isCartOpen})
{
    return(
        <>
        <NavBar cartLen={cartLen} isCartOpen={isCartOpen}/>
        <div className="belowNavbar">
            <Link to="/home"/>
        </div>
        
        <Outlet/>
        </>
    )   
}

export default Layout