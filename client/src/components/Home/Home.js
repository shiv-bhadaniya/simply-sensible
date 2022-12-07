import React from 'react'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import Navbar from './Navbar'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Navbar />
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Footer />
    </div>
  )
}

export default Home