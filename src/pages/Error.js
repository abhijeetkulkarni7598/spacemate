import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Error404 from '../containers/errorpg/Error404'
import Footer from '../components/footer/Footer'

const Error = () => {
    return (
        <div>
            <Navbar />
            <Error404 />
            <Footer />
        </div>
    )
}

export default Error
