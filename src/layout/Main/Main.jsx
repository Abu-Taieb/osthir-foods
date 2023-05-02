import React from 'react';
import Header from '../../pages/Share/Header/Header';
import Footer from '../../pages/Share/Footer/Footer';
import Navbar from '../../pages/Share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;