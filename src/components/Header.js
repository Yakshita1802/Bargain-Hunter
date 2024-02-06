// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import logo from './logo.jpeg'; // Import the logo image
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import '../styles.css'; // Import the CSS for styling

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const openRegistrationModal = () => {
        setIsRegistrationModalOpen(true);
    };

    const closeRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
    };

    return (
        <header className="header">
            <div className="centered-content">
                <div className="left-section">
                    <div className="application-dropdown">
                        <button className="application-dropdown-button">Application ▼</button>
                        <div className="dropdown-content">
                            <Link to="/sell">Sell</Link>
                            <Link to="/buy">Buy</Link>
                            <Link to="/list-home">List Home</Link>
                        </div>
                    </div>
                </div>
                <div className="center-section">
                    <img src={logo} alt="Logo" className="logo" /> {/* Add logo with the logo class */}
                </div>
                <div className="right-section">
                    <nav className="nav">
                        <ul>
                            <li><button onClick={openRegistrationModal}>Register</button></li>
                            <li><button onClick={openLoginModal}>Login</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Modal isOpen={isRegistrationModalOpen} onRequestClose={closeRegistrationModal}>
                <RegistrationForm onClose={closeRegistrationModal} />
            </Modal>
            <Modal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
                <LoginForm onClose={closeLoginModal} />
            </Modal>
        </header>
    );
};

export default Header;
