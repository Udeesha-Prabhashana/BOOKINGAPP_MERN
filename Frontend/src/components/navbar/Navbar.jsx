import { useContext } from "react"
import "./navbar.css"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
<<<<<<< HEAD
                        <button className="navButton">Register</button>
                        <button className="navButton">Login</button>
                    </div>
=======
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
>>>>>>> 7c9d1dbd6d534ef995300f993d86a09a2cc4a279
                )}
            </div>
        </div>
    );
};

export default Navbar