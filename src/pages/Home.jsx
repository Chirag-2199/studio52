import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Home = () => {
    return (
        <div className="bg-gradient-to-b from-[#031c2c] to-[#061f2e] min-h-screen text-white">
            <Navbar />
            <HeroSection />
        </div>
    )
}

export default Home
