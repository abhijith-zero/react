import React, { useState } from 'react';
import axios from 'axios';

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
        <div
            class="main"
            style={{
                margin: 'auto',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                position: 'relative',
            }}
        >
            <div
                class="semi"
                style={{
                    width: '20rem',
                    position: 'auto',
                    height: '30rem',
                    padding: '5px',
                    background: 'linear-gradient(to right, #00b4db, #0083b0)',
                    borderRadius: '10rem 10rem 0 0',
                }}
            >
                <div
                    class="rect"
                    style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                    }}
                >
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
                            style={{
                                marginBottom: '10px',
                                width: '100%',
                                padding: '5px',
                            }}
                        />
                        <p>Email</p>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                marginBottom: '10px',
                                width: '100%',
                                padding: '5px',
                            }}
                        />
                        <p>Choose Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                marginBottom: '10px',
                                width: '100%',
                                padding: '5px',
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                background:
                                    'linear-gradient(to right, #00b4db, #0083b0)',
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignupForm;
