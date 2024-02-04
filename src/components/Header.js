// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

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
                <h1>BargainHunter</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/sell"><button>Sell</button></Link></li>
                    <li><button onClick={() => console.log("Buy Items clicked")}>Buy</button></li>
                    <li><Link to="/list-home"><button>List Home</button></Link></li> {/* Add Link to List Home */}
                    <li><button onClick={openRegistrationModal}>Register</button></li>
                    <li><button onClick={openLoginModal}>Login</button></li>
                </ul>
            </nav>
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
