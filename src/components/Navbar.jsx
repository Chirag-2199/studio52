import React from 'react';
import './Navbar.css'; // Create this CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img
                        src="public/assets/studio52.png"
                        alt="Studio 52"
                        className="logo"
                    />
                </div>

                <ul className="nav-menu">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Video</li>
                    <li className="nav-item">Audio</li>
                    <li className="nav-item">About Us</li>
                    <li className="nav-item">Portfolio</li>
                    <li className="nav-item">Resources</li>
                </ul>

                <button className="quote-button">
                    Get a Quote
                </button>
            </div>
        </nav>
    )
}

export default Navbar;