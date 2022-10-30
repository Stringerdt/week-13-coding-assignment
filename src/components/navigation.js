import React from "react";

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark py-4 fw-bold">
                <div className="container-fluid">
                    <div className="row w-100 align-items-center justify-content-between">
                        <div className="col-3 text-start">
                            <a className="navbar-brand fs-2" href="#">Name Inc.</a>
                        </div>
                        <div className="col-6 fs-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                            <li className="nav-item border-end border-3 border-white">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item border-end border-3 border-white">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-3">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}