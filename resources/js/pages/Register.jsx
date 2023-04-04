import React from 'react';

function Register() {
    return (
        <div className="card">
            <div className="card-header fw-bold">Register new account</div>

            <div className="card-body">
                <form method="POST" action="{{ route('register') }}">

                    <div className="row mb-3">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-end">Name</label>

                        <div className="col-md-6">
                            <input id="name" type="text" className="form-control"
                                   name="name" value="" required autoComplete="name" autoFocus />

                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email address</label>

                        <div className="col-md-6">
                            <input id="email" type="email" className="form-control"
                                   name="email" value="" required autoComplete="email" />

                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                        <div className="col-md-6">
                            <input id="password" type="password"
                                   className="form-control" name="password" required
                                   autoComplete="new-password" />

                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-end">Confirm Password</label>

                        <div className="col-md-6">
                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation"
                                   required autoComplete="new-password" />
                        </div>
                    </div>

                    <div className="row mb-0">
                        <div className="col-md-6 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

