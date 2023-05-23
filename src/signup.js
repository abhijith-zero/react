import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Import the CSS file for custom styling

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send signup data to the backend
            const response = await axios.post(
                'http://localhost:3030/user/signup',
                {
                    name,
                    email,
                    password,
                }
            );
            console.log(response.data); // Success message from the backend

            // Reset the form
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
        }
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
                <div>
                    <input type="text" value="Already have an account?" />
                    <button type="submit" className="text">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
