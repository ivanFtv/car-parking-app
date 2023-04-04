import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <h5 className="navbar-nav me-auto fw-bold">
                        <div className="bg-primary px-2 py-1 text-center text-white rounded me-1">
                            P
                        </div>
                        <div className="d-flex my-auto">Car Parking App</div>
                    </h5>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

if (document.getElementById('navbar')) {
    const Index = ReactDOM.createRoot(document.getElementById("navbar"));

    Index.render(
        <React.StrictMode>
            <Navbar/>
        </React.StrictMode>
    )
}
