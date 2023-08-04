import { useContext } from "react"
import "./navbar.css"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
    
    const { user } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>  {/*use to after click hear, come to home page*/}
                    <span className="logo">Upbooking</span>
                </Link>
                {user ? user.username : (
                    <div className="newTtem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
                )};
            </div>
        </div>
    )
}

export default Navbar