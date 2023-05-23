import React from 'react';
import './boxContainer.css'; // Import the CSS file for styling

const BoxContainer = ({ imageSrc, heading }) => {
    return (
        <div className="box-container">
            <img src={imageSrc} alt="Image" />
            <h2>{heading}</h2>
        </div>
    );
};

export default BoxContainer;
