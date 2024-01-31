import React from 'react';
import mainContentImage from './mainContent.jpeg'; // Import the image

const MainContent = () => {
    return (
        <main className="main-content">
            <div className="search-bar">
                <input type="text" placeholder="Search by City, Town, State, or Zip Code" />
                <button>Search</button>
            </div>
            <img src={mainContentImage} alt="Main Content" style={{ width: '100%' }} /> {/* Display the image */}
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
