import "./list.css"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {format} from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";


const List = () => {
 
    const location = useLocation();           //used to access the current location information in your application's routing. It returns an object with properties representing the current URL
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.option);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `/hotels?city=${ destination }&min=${ min || 0 }&max=${ max || 999 }`);   //search only given city (city=${destination}) and get that hotels and assign to tha "data" using "useFetch".

    // useEffect(() => {
    //     if(location.state?.destination) setDestination(location.state.destination)  //thet cord run after run return cord
    // }, [location.state])

    const handleClick = () => {
        reFetch();
    };
    
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
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label> Check-in Date </label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {`${ format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                ) } to ${ format(date[0].endDate,
                                    "MM/dd/yyyy") }`}
                            </span>
                            {openDate && (<DateRange>
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            </DateRange>)}
                        </div>
                        <div className="lsItem">
                            <label> Options</label>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small> per night</small>
                                </span>
                                <input
                                    type="number"
                                    onChange={(e) => setMin(e.target.value)}
                                    className="lsOptionInput"
                                />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Max price <small> per night</small>
                                </span>
                                <input
                                    type="number"
                                    onChange={(e) => setMax(e.target.value)}
                                    className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Adult
                                </span>
                                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Children
                                </span>
                                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Room
                                </span>
                                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                            </div>
                        </div>
                        <button onClick={handleClick}> Search </button>
                    </div>
                    <div className="listResult">
                        {loading ? (
                            "loading"
                        ) : (
                            <>
                                {data.map((item) => (
                                    <SearchItem item={item} key={item._id} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List