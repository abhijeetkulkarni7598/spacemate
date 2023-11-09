import React from 'react'
import Navbar from '../components/navbar/Navbar'
import DownloadConContent from '../containers/download/DownloadConContent'
import Footer from '../components/footer/Footer'
import WhatsApp from '../components/common/WhatsApp'
import PhoneCall from '../components/common/PhoneCall'

const Download = () => {
    return (
        <>  
            <Navbar />
            <DownloadConContent />
            <Footer />
            <PhoneCall/>
        <WhatsApp/>
        </>
    )
}

export default Download