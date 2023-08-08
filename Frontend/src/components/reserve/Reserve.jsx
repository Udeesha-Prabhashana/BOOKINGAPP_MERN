import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const Reserve = ({ setOpen, hotelId }) => {
    const { data, loading, error } = useFetch(`/hotels/room/${ hotelId }`);
    const [selectedRooms,setSelectedRooms] = useState([])

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.taget.value
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter((item) => item !== value));
    };

    console.log(selectedRooms);
    

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span> Select your rooms:</span>
                {data.map((item) => (
                    <div className="rItem" key={item._id}>
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                MAx people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{ item.price}</div>
                        </div>
                        {item.roomNumbers.map(roomNumber => (
                        <div className="room">
                            <label>{roomNumber.number}</label>
                            <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>      {/*   each room number has diffrent ID */}
                        </div>
                         ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reserve