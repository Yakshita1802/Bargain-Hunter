import React, { useState } from 'react';
import mainContentImage from './mainContent.jpeg'; // Import the main content image
import electronicsImage from './electronics.jpeg'; // Import the electronics image
import booksImage from './books.jpeg'; // Import the books image
import furnitureImage from './furniture.jpeg'; // Import the furniture image
import vehicleImage from './vehicle.jpeg'; // Import the vehicle image
import stationeryImage from './stationery.jpeg'; // Import the stationery image
import RegistrationForm from './RegistrationForm'; // Import your registration form component

const MainContent = () => {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    const handleRegistrationClose = () => {
        setIsRegistrationOpen(false);
    };

    return (
        <main className="main-content">
            {isRegistrationOpen ? (
                <div className="registration-form-wrapper">
                    <RegistrationForm onClose={handleRegistrationClose} /> {/* Display the registration form */}
                </div>
            ) : (
                <>
                    <div className="search-bar">
                        <input type="text" placeholder="Search by City, Town, State, or Zip Code" />
                        <button>Search</button>
                    </div>
                    <img src={mainContentImage} alt="Main Content" style={{ width: '100%' }} /> {/* Display the main content image */}

                    {/* Category sections */}
                    <div className="category-container">
                        <div className="category">
                            <img src={electronicsImage} alt="Electronics" style={{ width: '100%' }} />
                            <h3>Electronics</h3>
                            <p>A category for electronics.</p>
                        </div>
                        <div className="category">
                            <img src={booksImage} alt="Books" style={{ width: '100%' }} />
                            <h3>Books</h3>
                            <p>A category for books.</p>
                        </div>
                        <div className="category">
                            <img src={furnitureImage} alt="Furniture" style={{ width: '100%' }} />
                            <h3>Furniture</h3>
                            <p>A category for furniture.</p>
                        </div>
                        <div className="category">
                            <img src={vehicleImage} alt="Vehicle" style={{ width: '100%' }} />
                            <h3>Vehicle</h3>
                            <p>A category for vehicles.</p>
                        </div>
                        <div className="category">
                            <img src={stationeryImage} alt="Stationery" style={{ width: '100%' }} />
                            <h3>Stationery</h3>
                            <p>A category for stationery items.</p>
                        </div>
                        {/* Add more category sections as needed */}
                    </div>
                </>
            )}
            <h2>Plans</h2>
            <div className="plan-info">
                <div className="plan">
                    <h3>Free Plan</h3>
                    <p>
                        The Free Plan provides access to basic features of BargainHunter, including:
                    </p>
                    <ul>
                        <li>Listing items for exchange or sale within the campus community.</li>
                        <li>Browsing and searching for budget-friendly accommodations.</li>
                        <li>Participating in community engagement activities.</li>
                    </ul>
                </div>
                <div className="plan">
                    <h3>Subscription Plan</h3>
                    <p>
                        The Subscription Plan offers additional benefits to enhance your BargainHunter experience, such as:
                    </p>
                    <ul>
                        <li>Increased visibility for your listings.</li>
                        <li>Access to advanced search features.</li>
                        <li>Priority support for your inquiries.</li>
                    </ul>
                    <p>
                        Revenue generated through recurring subscription fees supports the continuous improvement and maintenance of the BargainHunter platform.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
