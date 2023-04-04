import React from "react";

function SingleVehicle(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.vehicle.make} {props.vehicle.model}</h5>
                <p className="card-text">{props.vehicle.year}</p>
                <a href="#" className="btn btn-primary">Edit Vehicle</a>
            </div>
        </div>
    );
}

export default SingleVehicle;
