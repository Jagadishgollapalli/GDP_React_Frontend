import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SuperAdmin.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Overview from './SuperAdminTasks/Overview';
import Upload from './SuperAdminTasks/Upload';



function SuperAdmin(props) {
    const navigate = useNavigate();

    const { state } = useLocation();
    //console.log(state);
    const ChangeUser = state ? state.userDetails : null;
    //console.log(ChangeUser);

    const [overview, setOverview] = useState(true);
    const [upload, setUpload] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleOverview = () => {
        setOverview(!overview);
        setUpload(false);
    };

    const toggleUpload = () => {
        setOverview(false);
        setUpload(!upload);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleChangeLogOut = () => {
        navigate("/Login");
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <nav className="navbar navbar-dark bg-success fixed-top">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <h2>NORTHWEST MISSOURI STATE UNIVERSITY</h2>
                            <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ width: '8%' }}>
                                <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen} style={{ border: 'none' }}>
                                    <i className="bi bi-person-circle" style={{ color: 'white', fontSize: '2rem', minWidth: '200px' }}></i>
                                </button>
                                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ right: 0, left: 'auto' }}>
                                    <li><button className="btn btn-light" style={{ width: '100%', textAlign: 'initial' }}>{ChangeUser}</button></li>
                                    <li><button className="btn btn-light" style={{ width: '100%', textAlign: 'initial' }} onClick={handleChangeLogOut}>Sign out</button></li>
                                </ul>
                            </div>
                            <div className="offcanvas offcanvas-start text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h6 className="offcanvas-title" id="offcanvasDarkNavbarLabel">UNIVERSITY SUPER ADMIN PANEL</h6>
                                    <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="list-unstyled ps-0">
                                        <li className="mb-1">
                                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                                                Home
                                            </button>
                                            <div className="collapse" id="home-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}
                                                        onClick={toggleOverview}>Overview</button></li>
                                                    <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}
                                                        onClick={toggleUpload}>Upload</button></li>
                                                    <li><button className="btn btn-success" style={{ width: "25%", textAlign: "initial" }}>
                                                        Schools
                                                    </button></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="border-top my-3"></li>
                                        <li className="mb-1">
                                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                                Account
                                            </button>
                                            <div className="collapse" id="account-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>Profile</button></li>
                                                    <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>Settings</button></li>
                                                    <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }} onClick={handleChangeLogOut}>Sign out</button></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {overview &&
                <div className='container-fluid'>
                    <div className="row" style={{ height: "60vh" }}>
                        <div className="col d-flex justify-content-center align-items-center">
                            <Overview userState={state} />
                        </div>
                    </div>
                </div>
            }
            {
                upload && <div className='container-fluid'>
                    <div className="row" style={{ height: "60vh" }}>
                        <div className="col d-flex justify-content-center align-items-center">
                            <Upload />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default SuperAdmin;