import "./propertyList.css"

const PropertyList = () => {

    const { data, loading, error } = useFetch("/hotels/countByType?cities=Ella,Mirissa,Colombo");

    return (
        <div className="pList">
            {loading ?
                ("Loading please wait") :
                <><div className="pListItem">
                <img src="./images/eche_names/hotel.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1> Hotels </h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="./images/eche_names/apartment.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1> Apartments </h1>
                    <h2>390 apartments</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="./images/eche_names/resort.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1> Resorts </h1>
                    <h2>390 resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="./images/eche_names/villa.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1> Villas </h1>
                    <h2>179 villas</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="./images/eche_names/cabin.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1> Cabins </h1>
                    <h2>80 Cabins</h2>
                </div>
            </div></>}
        </div>
    )
}

export default PropertyList