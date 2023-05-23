import React from 'react';
import image1 from './logo.svg';
import BoxContainer from './component/boxContainer';
const Container = () => {
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
            </div>
        </div>
    );
};

export default Container;
