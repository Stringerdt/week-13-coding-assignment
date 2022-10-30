import React from "react";

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="vh-100 d-flex flex-column justify-content-center">
                <div className="container w-auto h-auto p-5 border border-4 border-dark rounded-3 d-flex flex-column justify-content-center">
                    <h3>Log In</h3>
                    <div className="row mt-3 justify-content-center align-items-center">
                        <div className="col-3">
                            <label className="fw-semibold" htmlFor="username">Username</label>
                        </div>
                        <div className="col-auto">
                            <input className="form-control border border-2 border-dark" id="username"></input>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center align-items-center">
                        <div className="col-3">
                            <label className="fw-semibold" htmlFor="password">Password</label>
                        </div>
                        <div className="col-auto">
                            <input className="form-control border border-2 border-dark" id="password"></input>
                        </div>
                    </div>
                    <div className="row mt-3 justify-content-center align-items-center mx-2">
                        <button className="btn btn-lg fw-semibold" id="signIn">Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}