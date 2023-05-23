import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import SignupForm from './signup';
import SignInPage from './signin';
import Layout from './layout';
import LogOut from './logout';

const Myelement = (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupForm />}></Route>
                <Route path="/Signin" element={<SignInPage />}></Route>
                <Route path="/logout" element={<LogOut />}></Route>
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </BrowserRouter>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Myelement);
