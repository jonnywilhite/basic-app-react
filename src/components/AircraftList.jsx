import React, {
    useState,
    useEffect,
    useRef,
} from "react";

import axios from "axios";

export const AircraftList = () => {
    const [aircraftList, setAircraftList] = useState([]);
    const [renderedAircrafts, setRenderedAircrafts] = useState();
    
    const aircraftListRef = useRef();
    const renderedAircraftsRef = useRef();
    aircraftListRef.current = aircraftList;
    renderedAircraftsRef.current = renderedAircrafts;
    
    useEffect(() => {
        axios.get("https://infinite-dawn-93085.herokuapp.com/aircrafts")
            .then(res => {
                setAircraftList(res.data.data);
                renderAircrafts(aircraftListRef.current)
            });
    }, []);
    
    const renderAircrafts = (data) => {
        const renderedValues = data.map((d) => {
            return (
                <div className="aircraft-padding" key={d.ident}>
                    <div className="aircraft-entry">
                        <div>{d.ident}</div>
                        <div>0%</div>
                    </div>
                </div>
            );
        });
        setRenderedAircrafts(renderedValues);
    };
    
    return(
        <div className="something">
            <p>Aircrafts</p>
            <div className="aircraft-box">{renderedAircraftsRef.current}</div>
        </div>
    )
};