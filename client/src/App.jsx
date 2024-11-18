import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'
import Navbar from './compnents/Navbar'
import Footer from './compnents/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credits" element={<BuyCredits />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App