import React from 'react'
import Clients from '../components/Clients'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Services />
            {/* <Portfolio /> */}
            {/* <Clients /> */}
            <Cta />
            <Footer />
        </>
    )
}

export default Home
