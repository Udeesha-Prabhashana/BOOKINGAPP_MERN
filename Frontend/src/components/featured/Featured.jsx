import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="./images/locations/Ella-train.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1> Ella</h1>
                    <h2> 256 prperties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="./images/locations/mirissa.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1> Mirissa</h1>
                    <h2> 85 prperties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="./images/locations/Colombo.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1> Colombo</h1>
                    <h2> 125 prperties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured