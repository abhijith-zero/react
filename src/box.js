import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './logo.svg';
import axios from 'axios';
import BoxContainer from './component/boxContainer';

const Container = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3030/user/logout'
            );
            console.log(response.data);

            navigate('/signin');
        } catch (error) {
            console.error(error);
        }
    };

    const handleUsername = async (e) => {};

    return (
        <div className="main">
            <div>
                <div className="input-field">
                    <h1>Name Your Organization</h1>
                    <input type="text" placeholder="Enter organization name" />
                    <h1>Select your Organization Type below</h1>
                </div>
                <div className="container-row">
                    <BoxContainer imageSrc={image1} />
                    <BoxContainer imageSrc={image1} />
                    <BoxContainer imageSrc={image1} />
                    <BoxContainer imageSrc={image1} />
                </div>
                <div className="container-row">
                    <BoxContainer imageSrc={image1} />
                    <BoxContainer imageSrc={image1} />
                    <BoxContainer imageSrc={image1} />
                    <BoxContainer imageSrc={image1} />
                </div>
                <div>
                    <button type="submit" className="text">
                        Next
                    </button>
                </div>
                <div>
                    <h1>hi,</h1>
                    <input type="text" value={handleUsername} readOnly />
                    <button
                        type="button"
                        className="text"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Container;
