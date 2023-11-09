import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ThankYoucont from '../containers/thankyou/ThankYoucont'
import WhatsApp from '../components/common/WhatsApp'
import PhoneCall from '../components/common/PhoneCall'

const ThankYou = () => {
    return (
        <>
            <Navbar />
            <ThankYoucont />
            <Footer />
            <PhoneCall/>
        <WhatsApp/>
        </>
    )
}

export default ThankYou
