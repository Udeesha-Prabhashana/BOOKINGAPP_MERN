import "./navbar.css"

const Navbar =({type}) => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Upbooking</span>
                <div className="newTtem">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar