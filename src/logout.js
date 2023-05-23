import React, { useEffect } from 'react';
import axios from 'axios';

const LogOut = () => {
    useEffect(() => {
        const logout = async () => {
            try {
                // Send logout request to the backend
                const response = await axios.post(
                    'http://localhost:3030/user/logout'
                );
                console.log(response.data); // Success message from the backend
            } catch (error) {
                console.error(error);
            }
        };

        logout(); // Call the logout function when the component mounts
    }, []);

    return (
        <div>
            <form>
                <br />
                <button type="submit">Log Out</button>
            </form>
        </div>
    );
};

export default LogOut;
