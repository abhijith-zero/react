import React, { useState } from 'react';
import axios from 'axios';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send signup data to the backend
            const response = await axios.post(
                'http://localhost:3030/user/login',
                {
                    email,
                    password,
                }
            );
            console.log(response.data); // Success message from the backend

            // Reset the form
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInPage;
