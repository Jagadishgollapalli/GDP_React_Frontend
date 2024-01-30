import React from 'react';
import styles from './Overview.css';
import { useNavigate } from 'react-router-dom';


function Overview(props) {
    const navigate = useNavigate();

    const handleChangeToAdmin = () =>{
        navigate("/admin");
    }
    const handleChangeToFaculty = () =>{
        navigate("/faculty");
    }

    return (
        <>
        <div className='container' style={{marginTop:"10%"}}>
            <div className={`${styles.overviewContainer}container-fluid`}>
                <div className='row'>
                        <div class={`card ${styles.card}`} style={{ width: "18rem", marginTop: "5px", height: "auto" }}>
                            <img src="../images/admin.png" className={`card-img-top mx-auto ${styles.cardImg}`} style={{ maxWidth: "60%" }} />
                            <div class="card-body">
                                <h3 class={`card-title ${styles.cardTitle}`} style={{ fontFamily: "verdana", fontWeight: "bold" }}>ADMIN</h3>
                                <p class="card-text">Admins are the graduate advisors of Individual Schools</p>
                                <button class="btn btn-primary" onClick={handleChangeToAdmin}>Access Admin</button>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem", marginRight: "30px",marginTop:"2px", height: "auto" }}>
                            <img src="../images/faculty.png" className="card-img-top mx-auto" style={{ maxWidth: "60%" }} />
                            <div className="card-body">
                                <h3 className="card-title" style={{ fontFamily: "verdana", fontWeight: "bold" }}>FACULTY</h3>
                                <p className="card-text">Faculty includes all professors from schools</p>
                                <button className="btn btn-primary" onClick={handleChangeToFaculty}>Access Faculty</button>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Overview;