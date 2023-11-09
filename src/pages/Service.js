import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Servicepg from '../containers/service/Servicepg'
import WhatsApp from '../components/common/WhatsApp'
import PhoneCall from '../components/common/PhoneCall'


const Service = () => {
    return (
        <>
            <Navbar />
            <Servicepg />
            <Footer />
            <PhoneCall/>
        <WhatsApp/>
        </>
    )
}

export default Service
