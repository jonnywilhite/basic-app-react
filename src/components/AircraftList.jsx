import React, { useEffect } from "react";

import axios from "axios";

export const AircraftList = () => {
    useEffect(() => {
        axios.get("https://infinite-dawn-93085.herokuapp.com/aircrafts")
            .then(res => {
                console.log(res.data);
            });
    })
    
    return(
        <div>
            <p>Aircrafts</p>
        </div>
    )
};