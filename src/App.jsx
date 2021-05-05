import React, { Component } from "react";
import "./App.css";

import { AircraftList } from "./components/AircraftList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="aircraft-container">
                    <AircraftList />
                </div>
                <div className="rotation-container">
                    <p>Rotation</p>
                </div>
                <div className="flights-container">
                    <p>Flights</p>
                </div>
            </div>
        );
    }
}

export default App;
