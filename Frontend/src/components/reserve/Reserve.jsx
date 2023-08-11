import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

const Reserve = ({ setOpen, hotelId }) => {
    const { data, loading, error } = useFetch(`/hotels/room/${ hotelId }`);
    const [selectedRooms, setSelectedRooms] = useState([])
    const {dates} = useContext(SearchContext)

    const handleSelect = (e) => {      //use to get selected rooms
        const checked = e.target.checked;        // Extract whether the checkbox was checked or unchecked
        const value = e.target.value;           // Extract the value of the checkbox (presumably identifying the room)
        setSelectedRooms(checked ?
            [...selectedRooms, value]              //syntax (...) to create a new array.
            : selectedRooms.filter((item) => item !== value));   //it removes the deselected room's value from the list of selected rooms.
    };

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`/rooms/availability/${ roomId }`, { dates: alldates });
                    return res.data;
                }));
        }
        catch(err){
            
        };
    }

    // console.log(selectedRooms);

    const getDatesInRange = (startDate,endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        let list = [];
        
        while (date <= end) {
            list.push(new Date(date).getTime());   //when use getTime() func its give timestamps, its easier to copmir dates 
            date.setDate(date.getDate() + 1);
        }

        return list;
    }

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate) //get all dates using user given dates

    const isAvailable = (roomNumber) => {
    if (!roomNumber || !roomNumber.unavailableDates || !Array.isArray(roomNumber.unavailableDates)) { // Handle the case where roomNumber or its properties are undefined or not of expected type
        return false;    // Or handle as appropriate for your use case
    }

    const isFound = roomNumber.unavailableDates.some((date) =>  //some() method is used to check given any value is hear or not ... , "unvailableDates" is allready in the database
        alldates.includes(new Date(date).getTime())             //check one by one given dates are hear or not 
    );

        return !isFound;            //because "isFound" is true, that mean it's not availble
    };    

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
                        <div className="rSelectRooms">
                            {item.roomNumbers.map(roomNumber => (
                            <div className="room">
                                <label>{roomNumber.number}</label>
                                    <input
                                        type="checkbox"
                                        value={roomNumber._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(roomNumber)}
                                    />      {/* each room number has diffrent ID  using pass the  "value " as parameter using "_id"*/}
                            </div>
                            ))}
                        </div>
                    </div>                   
                ))}
                <button onClick={handleClick} className="rButton"> Reserve Now!</button>
            </div>
        </div>
    );
};

export default Reserve