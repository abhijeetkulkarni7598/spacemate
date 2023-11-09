import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import Footer from '../components/footer/Footer'
import GalleryConetent from '../components/gallery/GalleryConetent'
import Navbar from '../components/navbar/Navbar'
import WhatsApp from '../components/common/WhatsApp'
import PhoneCall from '../components/common/PhoneCall'


const Gallery = () => {
    return (
        <>  
            <Navbar />
            <SimpleReactLightbox>
                <GalleryConetent />
            </SimpleReactLightbox>
            <Footer />
            <PhoneCall/>
        <WhatsApp/>
        </>
    )
}

export default Gallery
