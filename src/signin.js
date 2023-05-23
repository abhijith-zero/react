import React, { useState } from 'react';
import axios from 'axios';
const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3030/user/login',
                {
                    email,
                    password,
                }
            );
            console.log(response.data);

            const responseData = response.data;

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

    return (
        <div className="main">
            <div className="semi"></div>
            <div className="rect">
                <div>
                    <h1>Welcome back!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="Email address"
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
                    <div>
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            id="rememberMe"
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    {message && <p>{message}</p>} {}
                    <button
                        type="submit"
                        className="submit-button"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
