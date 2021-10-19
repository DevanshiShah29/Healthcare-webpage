import React from 'react';
import Logo from '../assets/images/logo.png';
import Home from '../assets/images/ion-home.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid">
                <a href="/#" className="logo"><img src={Logo} alt="logo"/></a>
                <div className="header-right">
                    <a className="home" href="/#"><img src={Home} alt="Home"/> </a>
                    <a className="active submenu" href="/#">Diensten </a>
                    <a href="/#">Over ons</a>
                    <a href="/#">Cases</a>
                    <a href="/#">Contact</a>
                   
                </div>
            </div>
        </header>
    )
}

export default Header;
