import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

const Reserve = ({ setOpen, hotelId }) => {
    const { data, loading, error } = useFetch(`/hotels/room/${ hotelId }`);
    const [selectedRooms, setSelectedRooms] = useState([])
    const {dates} = useContext(SearchContext)

    const handleSelect = (e) => {
        const checked = e.target.checked;        // Extract whether the checkbox was checked or unchecked
        const value = e.target.value;           // Extract the value of the checkbox (presumably identifying the room)
        setSelectedRooms(checked ?
            [...selectedRooms, value]              //syntax (...) to create a new array.
            : selectedRooms.filter((item) => item !== value));   //it removes the deselected room's value from the list of selected rooms.
    };

    // console.log(selectedRooms);

    const getDatesInRange = (startDate,endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        let list = [];
        
        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }

        return list;
    }

    console.log(getDatesInRange(dates[0].startDate, dates[0].endDate));

    // const handleClick = () => {
    //     const start = 
    // }
    

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
                            <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>      {/* each room number has diffrent ID  using pass the  "value " as parameter using "_id"*/}
                        </div>
                        ))}
                        <button className="rButton"> Reserve Now!</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reserve