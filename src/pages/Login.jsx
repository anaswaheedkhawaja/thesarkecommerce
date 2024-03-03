import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { loginUser } from '../components/userData'; // Import the loginUser function

const Login = () => {
    // Initialize state to hold form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login
        const loggedInUser = loginUser(formData);
        if (loggedInUser) {
            alert('Login successful!');
            // Redirect to home page or perform any other actions
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    // Function to handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Update form data state
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Login</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="my-3">
                                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
