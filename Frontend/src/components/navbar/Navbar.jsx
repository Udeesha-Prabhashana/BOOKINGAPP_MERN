import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar =({type}) => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>  {/*use to after click hear, come to home page*/}
                    <span className="logo">Upbooking</span>
                </Link>
                <div className="newTtem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar