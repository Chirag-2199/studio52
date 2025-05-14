import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-heading">
                    Transforming Ideas <br />
                    into <span className="highlight">Cinematic</span> Brilliance
                </h1>
                <p className="hero-text">
                    From cinematic storytelling to high-quality audio production, we craft compelling content that captivates audiences and elevates brands.
                </p>
                <div className="image-grid">
                    <img src="public\assets\image1.png" alt="workers" className="gallery-image left-image" />
                    <img src="public/assets/image2.png" alt="scene" className="gallery-image center-image" />
                    <img src="public/assets/image3.png" alt="drone" className="gallery-image right-image" />
                </div>
                <button className="cta-button">
                    Connect With us
                </button>
            </div>
        </div>
    )
}

export default HeroSection;