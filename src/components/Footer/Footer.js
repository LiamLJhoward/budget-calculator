import React from "react";
import Logo from '../Navigation/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Project created by Liam, Caleb and Alex</p>
            <img src={Logo} className='logo' alt="brand logo" />
            <p>Copyright 2023 MoneyPlanner. All Rights Reserverd.</p>
        </footer>
    )
}

export default Footer;