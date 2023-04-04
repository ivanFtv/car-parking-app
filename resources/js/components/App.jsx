import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "../pages/Welcome";
import Navbar from "./Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewVehicle from "../pages/NewVehicle";
import VehiclesList from "../pages/VehiclesList";

function MyApp() {
    return (
    <BrowserRouter>

        <Navbar />

        <div className="container mt-5 col-md-6">
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="new-vehicle" element={<NewVehicle />} />
                <Route path="vehicles-list" element={<VehiclesList />} />
            </Routes>
        </div>

    </BrowserRouter>
    );
}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(<MyApp />, document.getElementById('app'))
}
