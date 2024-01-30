import React,{useState} from 'react';

function Faculty(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

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
                                    <li><button className="btn btn-light" style={{ width: '100%', textAlign: 'initial' }}>USER</button></li>
                                    <li><button className="btn btn-light" style={{ width: '100%', textAlign: 'initial' }}>Sign out</button></li>
                                </ul>
                            </div>
                            <div className="offcanvas offcanvas-start text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h6 className="offcanvas-title" id="offcanvasDarkNavbarLabel">UNIVERSITY FACULTY PANEL</h6>
                                    <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="list-unstyled ps-0">
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
                                                                <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>BigData</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>Database</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "25%", textAlign: "initial" }}>BigData</button></li>
                                                            </ul>
                                                        </div>
                                                    </ul>
                                                    <ul>
                                                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#Is-collapse" aria-expanded="false"><a href="#" className="link-dark rounded">Information Systems</a></button>
                                                        <div className="collapse" id="Is-collapse">
                                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                                                <li><button className="btn btn-light" style={{ width: "60%", textAlign: "initial", whiteSpace: "normal" }}>Enterprise Networking</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "60%", textAlign: "initial" }}>Financial Modeling</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "60%", textAlign: "initial" }}>Cyber security</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "60%", textAlign: "initial" }}>Information Systems</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "60%", textAlign: "initial" }}>Business Intelligence</button></li>
                                                                <li><button className="btn btn-light" style={{ width: "60%", textAlign: "initial" }}>IS Capstone</button></li>
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
        </div>
    );
}

export default Faculty;