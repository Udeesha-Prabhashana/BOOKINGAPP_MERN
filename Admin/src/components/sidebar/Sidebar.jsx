import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="top">
                <span className="logo">Upadmin</span>
            </div>
            <hr/>         {/*  hr use to get line */}
            <div className="center">
                <ul>
                    <li> <span> Dashboard</span></li>
                </ul>
                <ul>
                    <li> <span> Dashboard</span></li>
                </ul>
                <ul>
                    <li> <span> Dashboard</span></li>
                </ul>
                <ul>
                    <li> <span> Dashboard</span></li>
                </ul>
                <ul>
                    <li> <span> Dashboard</span></li>
                </ul>
                <ul>
                    <li> <span> Dashboard</span></li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}

export default Sidebar