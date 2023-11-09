import React from 'react'
import Navbar from '../components/navbar/Navbar'
import AboutUs from '../containers/aboutus/AboutUs'
import Footer from '../components/footer/Footer'
import WhatsApp from '../components/common/WhatsApp'
import PhoneCall from '../components/common/PhoneCall'


const About = () => {
    return (
        <div>
        <Navbar />
        <AboutUs />
        <Footer />
        <PhoneCall/>
        <WhatsApp/>
        </div>
    )
}

export default About
