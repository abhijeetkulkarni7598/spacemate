import React from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import Footer from '../components/footer/Footer'
import GalleryConetent from '../components/gallery/GalleryConetent'
import Navbar from '../components/navbar/Navbar'


const Gallery = () => {
    return (
        <>  
            <Navbar />
            <SimpleReactLightbox>
                <GalleryConetent />
            </SimpleReactLightbox>
            <Footer />
        </>
    )
}

export default Gallery
