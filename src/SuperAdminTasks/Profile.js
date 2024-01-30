import React from 'react';
import styles from './Overview.css';
import { useNavigate, useLocation } from 'react-router-dom';


function Profile(props) {
    const navigate = useNavigate();
    const { state } = useLocation();
    const ChangeUser = state.userDetails;

    return (
        <>
            <div className='container' style={{ marginTop: "10%" }}>
                <div className={`${styles.overviewContainer}container-fluid`}>
                    <div className='row'>
                        <div class={`card ${styles.card}`} style={{ width: "18rem", marginTop: "5px", height: "auto" }}>
                            <img src="../images/admin.png" className={`card-img-top mx-auto ${styles.cardImg}`} style={{ maxWidth: "60%" }} />
                            <div class="card-body">
                                <h3 class={`card-title ${styles.cardTitle}`} style={{ fontFamily: "verdana", fontWeight: "bold" }}>Name</h3>
                                <p class="card-text">Role</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;