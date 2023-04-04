import React from "react";
import SingleVehicle from "../components/SingleVehicle";

function VehiclesList(props) {

    // const vehicles = props.vehicles;

    return (
        <div className="card">
            <div className="card-header fw-bold">My saved vehicles</div>
            <div className="card">
                <div className="d-flex justify-content-between align-middle">
                    <div className="card-body">
                        <h5 className="card-title">Mazda Mx4</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Plate number: 1234</h6>
                    </div>
                    <div className="card-body d-flex align-middle  justify-content-end">
                    <button className="btn btn-warning btn-sm px-3 py-1 fw-bold">Edit Vehicle</button>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default VehiclesList;
