import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Import the CSS file for custom styling

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3030/user/signup',
                {
                    name,
                    email,
                    password,
                }
            );
            const responseData = response.data;
            console.log(responseData);

            if (responseData.success) {
                setEmail('');
                setPassword('');
            } else {
                setMessage(responseData.message);
            }
            window.location.href = './box';
        } catch (error) {
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                console.log(errorData);
                setMessage(errorData.message);
            } else {
                console.error(error);
            }
        }
    };

    const handleLogin = () => {
        window.location.href = './signin';
    };

    return (
        <div className="main">
            <div className="semi"></div>
            <div className="rect">
                <div>
                    <h1>Let's go!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Full Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field"
                    />
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <p>Choose Password</p>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button type="submit" className="submit-button">
                        Sign Up
                    </button>
                </form>
                {message && <p>{message}</p>} {}
                <div>
                    <p>Already have an account?</p>
                    <button className="text" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
