import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Error404 from '../containers/errorpg/Error404'
import Footer from '../components/footer/Footer'
import WhatsApp from '../components/common/WhatsApp'
import PhoneCall from '../components/common/PhoneCall'

const Error = () => {
    return (
        <div>
            <Navbar />
            <Error404 />
            <Footer />
            <PhoneCall/>
        <WhatsApp/>
    </div>
    )
}

export default Error
