import "./featuredProperties.css"
import useFetch from "../../hooks/useFetch";

const FeaturesProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

    return (
        <div className="fp">
            <div className="fpItem">
                <img src="./images/eche_names/property.jpg" alt="" className="fpImg" />
                <span className="fpName">Aparthotel Start Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice"> Starting from $120 </span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span> Excellent</span>
                </div>
               </div> 
                <div className="fpItem">
                <img src="./images/eche_names/property.jpg" alt="" className="fpImg" />
                <span className="fpName">Aparthotel Start Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice"> Starting from $120 </span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span> Excellent</span>
                </div>
                </div>
                <div className="fpItem">
                <img src="./images/eche_names/property.jpg" alt="" className="fpImg" />
                <span className="fpName">Aparthotel Start Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice"> Starting from $120 </span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span> Excellent</span>
                </div>
                </div>
                <div className="fpItem">
                <img src="./images/eche_names/property.jpg" alt="" className="fpImg" />
                <span className="fpName">Aparthotel Start Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice"> Starting from $120 </span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span> Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturesProperties