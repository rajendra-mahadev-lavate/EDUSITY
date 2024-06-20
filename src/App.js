import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Vedio from './Component/Vedio/Vedio'

const App = () => {

  const [playState, setPlayState] = useState(false);


  return (
    <>
      <Navbar />
      <Hero />
      <Title subTitle="OUR PROGRAM" title="What We Offer" />
      <Program />
      <About setPlayState={setPlayState} />
      <Title subTitle="Gallery" title="Campus Photos" />
      <Campus />
      <Title subTitle="TESTIMONIALS" title="What Student Says" />
      <Testimonials />
      <Title subTitle="Contact Us" title="Get in Touch" />
      <Contact />
      <Footer />
      <Vedio playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default App
