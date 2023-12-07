import React from 'react'
import HeroSection from '../setions/HeroSection'
import Navbar from '../components/Navbar'
import ContactSection from '../setions/ContactSection'


function Home() {
    return (
        <div className="home">

            <Navbar />
            <HeroSection />
            <ContactSection />
        </div>
    )
}

export default Home
