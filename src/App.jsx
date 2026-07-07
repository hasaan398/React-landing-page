import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Tools from './components/tool/Tool'
import AllInOne from './components/allinone/Allinone'
import FeaturesSection from './components/features/FeaturesSection'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <Hero />
        <Tools />
        <AllInOne />
        <FeaturesSection />
        <Footer/>
      </div>
    </>
  )
}
export default App