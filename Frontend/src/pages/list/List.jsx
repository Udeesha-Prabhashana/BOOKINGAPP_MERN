import "./list.css"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const List = () => {
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label> Destination </label>
                            <input type="text"/>
                        </div>
                        <div className="lsItem">
                            <label> Check-in Date </label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    )
}

export default List