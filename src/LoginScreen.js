import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './LoginScreen.css'; // Import a CSS file for additional styling

function LoginScreen({ onUserRoleChange }) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Redirect logic handled on the server
                const responseData = await response.json();
                const redirectUrl = responseData.url;
                const ChangeRole = responseData.role;
                const userDetails = responseData.Name;
                // console.log("hi" + userDetails);

                if (ChangeRole) {
                    navigate(redirectUrl, { state: { userDetails, ChangeRole } });
                    onUserRoleChange(ChangeRole);
                } else {
                    // Handle case where user role is null or undefined
                    console.error('User not authenticated');
                    // Redirect to login or handle accordingly
                }
            } else {
                alert('Invalid credentials');
                // Handle authentication failure (show error message, etc.)
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle other errors
        }
    };

    return (
        <>
            <div className="container login-container">
                <img src="../images/nw.jpg" className="background-image" alt="background" />
                <section className="vh-100">
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <div class="card">
                            <h5>NORTHWEST MISSOURI STATE UNIVERSITY</h5>
                            <div class="card-body py-5 px-md-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group input-group-lg mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Email</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={data.email} name="email" onChange={e => { setData({ ...data, [e.target.name]: e.target.value }) }} />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <div className="input-group input-group-lg mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-lg">Password</span>
                                            <input type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={data.password} name="password" onChange={e => { setData({ ...data, [e.target.name]: e.target.value }) }} />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-around align-items-center mb-4">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                            <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                        </div>
                                        <a href="#!">Forgot password?</a>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-lg btn-block">SIGN IN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <img src="../images/bearcat.png" alt="Second Image" className="additional-image" /> */}
                </section>
            </div>
        </>
    );
}

export default LoginScreen;
