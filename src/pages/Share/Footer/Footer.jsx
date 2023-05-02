import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <p className="">All right reserved &copy; <Link to={`/main`}>Osthir Foods</Link> 2023</p>
        </div>
    );
};

export default Footer;