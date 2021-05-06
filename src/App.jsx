import React, { Component } from "react";
import "./App.css";

import { AircraftList } from "./components/AircraftList";
import { FlightList } from "./components/FlightList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AircraftList />
                <div className="rotation-container">
                    <p>Rotation</p>
                </div>
                <FlightList />
            </div>
        );
    }
}

export default App;
