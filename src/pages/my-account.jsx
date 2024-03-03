import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import { addUser, loginUser } from '../components/userData';

const MyAccount = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isLoginMode, setIsLoginMode] = useState(true);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const loggedInUser = await loginUser(formData);
        if (loggedInUser) {
            alert('Login successful!');
            // Redirect to dashboard or home page
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        const newUser = await addUser(formData);
        if (newUser) {
            alert('Registration successful!');
            // Redirect to login page or home page
        } else {
            alert('Registration failed. Please try again.');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">{isLoginMode ? 'Login' : 'Register'}</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={isLoginMode ? handleLoginSubmit : handleRegisterSubmit}>
                            {!isLoginMode && (
                                <div className="form my-3">
                                    <label htmlFor="Name">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Name"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
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
                                <p>{isLoginMode ? 'New Here?' : 'Already have an account?'} <Link to="#" onClick={toggleMode} className="text-decoration-underline text-info">{isLoginMode ? 'Register' : 'Login'}</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    {isLoginMode ? 'Login' : 'Register'}
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

export default MyAccount;
