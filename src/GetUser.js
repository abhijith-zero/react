import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Import the CSS file for custom styling

const Getuser = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send signup data to the backend
            const response = await axios.get(
                'http://localhost:3030/user/646b9c6c5f45e1513fd3d277'
            );

            const responseData = response.data;
            console.log(responseData); // Success message from the backend

            const name = responseData.name;
            console.log(name); // Name value from the response

            setMessage(name);
        } catch (error) {
            // Handle the error response
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                console.log(errorData); // Error message from the backend
                setMessage(errorData.message);
            } else {
                console.error(error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={message} readOnly />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Getuser;
