import React from 'react'
import Header from './containers/header/Header'
import Navbar from './components/navbar/Navbar'
import HowWeWork from './containers/HowWeWork/HowWeWork'
import AboutUs from './containers/aboutus/AboutUs'
import Services from './containers/Services/Services'
import Contactus from './containers/contact/Contactus'
import Footer from './components/footer/Footer'
import YoutVid from './containers/videoyt/YoutVid'
import WhatsApp from './components/common/WhatsApp'
import PhoneCall from './components/common/PhoneCall'

const Home = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <HowWeWork />
      <AboutUs />
      <Services />
      <YoutVid />
      <Contactus />
      <Footer />
      <PhoneCall/>
        <WhatsApp/>
    </div>
  )
}

export default Home
