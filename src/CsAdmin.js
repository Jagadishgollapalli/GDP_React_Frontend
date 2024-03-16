import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ACS_Faculty from './ACS_Faculty';


function CsAdmin(props) {
    const [dashboard, setDashboard] = useState(true);
    const [close,setClose] = useState(false);

    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { state } = useLocation();
    const ChangeUser = state?.userDetails;

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleChangeLogOut = () => {
        navigate("/Login");
    }

    // const handleDashboard = () => {
    //     if (dashboard) {
    //         // If dashboard is true, navigate to csadmin/viewfaculty
    //         navigate("/csadmin/viewfaculty", { state: { from: "/CSadmin" } });
    //     } else{
    //     setDashboard(!dashboard);
    //     setClose(!close);
    //     }
    // };

    // const handleFaculty =() => {
    //     navigate("/ACSfaculty" , {state});
    // };

    // const handleClose = () =>{
    //     setDashboard(!dashboard);
    //     setClose(!close);
    // }

    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <nav className="navbar navbar-dark bg-success fixed-top">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <h2>NORTHWEST MISSOURI STATE UNIVERSITY - ADMIN CS</h2>
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
                                    <h6 className="offcanvas-title" id="offcanvasDarkNavbarLabel">UNIVERSITY ADMIN PANEL</h6>
                                    <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="list-unstyled ps-0">
                                        <li className="mb-1">
                                            <button className="btn btn-dark" style={{ fontFamily: "verdana", textAlign: "start", width: "150px" }}>
                                                {dashboard?"Faculty":"Dashboard"}
                                            </button>
                                        </li>
                                        <li className="mb-1">
                                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                                Schools
                                            </button>
                                            <div className="collapse" id="dashboard-collapse">
                                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                    <ul>
                                                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#acs-collapse" aria-expanded="false"><a href="#" className="link-dark rounded">Applied Computer Science</a></button>
                                                        <div className="collapse" id="acs-collapse">
                                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                                                <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>Oops</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>WEBapps</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>Database</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "50%", textAlign: "initial" }}>Android</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "50%", textAlign: "initial" }}>IOS</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "50%", textAlign: "initial" }}>Machine Learning</button></li>
                                                            </ul>
                                                        </div>
                                                    </ul>
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
                                                    <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>Sign out</button></li>
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
            { dashboard && 
                <div className="container-xl">
                <div class="card" style={{ width: "65rem", margin: "7% 0 0 13%", boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",backgroundColor:"#F6FFFC" }}>
                    <div class="row">
                        <div class="col-md-4">
                            <img src="../images/DrBandi.jpg" className="img-fluid" alt="bandi" style={{ width: "250px", height: "300px" }} />
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">Dr.AjayBandi</h5>
                                <p class="card-text" style={{fontFamily:"verdana"}}>ADMIN - DEPARTMENT OF APPLIED COMPUTER SCIENCE</p>
                                <ul>
                                    <li style={{textAlign:"start"}}>Ph.D. Computer Science; Mississippi State University</li>
                                    <li style={{textAlign:"start"}}>M.S. Computer Science; Mississippi State University</li>
                                    <li style={{textAlign:"start"}}>M.S. Applied Computer Science; Northwest Missouri State University.</li>
                                </ul>
                                <div class="row" style={{ margin: "6% 0 0 0" }}>
                                    <div className='col' >
                                    <button className='btn btn-light' style={{width:"200px", fontFamily:"verdana"}}>VIEW FACULTY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            }
            {/* {
                <ACS_Faculty close={close} handleClose={handleClose}/>
            } */}
        </div>
    );
}

export default CsAdmin;