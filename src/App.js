import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SellPage from './components/SellPage';
import ListHome from './components/ListHome'; // Import the ListHome component
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/sell" element={<SellPage />} />
                    <Route path="/list-home" element={<ListHome />} /> {/* Define the List Home route */}
                    <Route path="/" element={<MainContent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
