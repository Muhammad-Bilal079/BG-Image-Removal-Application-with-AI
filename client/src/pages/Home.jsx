import React from 'react'
import Header from '../compnents/Header'
import Steps from '../compnents/Steps'
import BgSlider from '../compnents/BgSlider'
import Testimonials from '../compnents/Testimonials'
import Uploads from '../compnents/Uploads'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonials/>
      <Uploads/>
    </div>
  )
}

export default Home