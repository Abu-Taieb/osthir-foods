import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <p className="text-center">All right reserved &copy; <Link className='font-bold' to={`/`}>Osthir Foods</Link> 2023</p>
        </div>
    );
};

export default Footer;