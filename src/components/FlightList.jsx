import React, {
    useState,
    useEffect,
    useRef,
} from "react";

import axios from "axios";

export const FlightList = () => {
    const [flightList, setFlightList] = useState([]);
    const [renderedFlights, setRenderedFlights] = useState();
    
    const flightListRef = useRef();
    const renderedFlightsRef = useRef();
    flightListRef.current = flightList;
    renderedFlightsRef.current = renderedFlights;
    
    useEffect(() => {
        axios.get("https://infinite-dawn-93085.herokuapp.com/flights")
            .then(res => {
                setFlightList(res.data.data);
                console.log(flightListRef);
                renderFlights(flightListRef.current);
            });
    }, []);
    
    const renderFlights = (data) => {
        const renderedValues = data.map((d) => {
            return (
                <div className="flight-entry" key={d.id}>
                    <div className="flight-id">{d.id}</div>
                    <div className="flight-airports">
                        <div className="flight-origin">{d.origin}</div>
                        <div className="flight-destination">{d.destination}</div>
                    </div>
                    <div className="flight-times">
                        <div className="flight-origin">{d.readable_departure}</div>
                        <div className="flight-destination">{d.readable_arrival}</div>
                    </div>
                </div>
            );
        });
        setRenderedFlights(renderedValues);
    };
    
    return(
        <div className="flights-container">
            <p>Flights</p>
            <div className="flight-box">{renderedFlightsRef.current}</div>
        </div>
    )
};