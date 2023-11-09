import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Contactus from '../containers/contact/Contactus'
import Footer from '../components/footer/Footer'
import WhatsApp from '../components/common/WhatsApp'
import PhoneCall from '../components/common/PhoneCall'

const Contact = () => {
    return (
        <>
          <Navbar />
          <Contactus />
          <Footer />
          <PhoneCall/>
        <WhatsApp/>
        </>
    )
}

export default Contact
