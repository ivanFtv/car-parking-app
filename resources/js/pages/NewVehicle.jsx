import React from 'react';

function NewVehicle() {
    return (
        <div className="card">
            <div className="card-header fw-bold">Register new vehicle</div>

            <div className="card-body">
                <form method="POST" action="{{ route('register') }}">

                    <div className="row mb-3">
                        <label htmlFor="manufacturer" className="col-md-4 col-form-label text-md-end">Manufacturer</label>

                        <div className="col-md-6">
                            <input id="manufacturer" type="text" className="form-control"
                                   name="manufacturer" value="" required autoComplete="manufacturer" autoFocus />

                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="model" className="col-md-4 col-form-label text-md-end">Model</label>

                        <div className="col-md-6">
                            <input id="model" type="text" className="form-control"
                                   name="model" value="" required autoComplete="model" autoFocus />

                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="plate-number" className="col-md-4 col-form-label text-md-end">Plate Number</label>

                        <div className="col-md-6">
                            <input id="plate-number" type="text" className="form-control"
                                   name="plate-number" value="" required autoComplete="plate-number" autoFocus />

                        </div>
                    </div>

                    <div className="row mb-0">
                        <div className="col-md-6 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                                Save this vehicle
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewVehicle;

