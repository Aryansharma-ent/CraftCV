import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AfterHero from '../components/AfterHero'
import TemplatesDemo from '@/components/TemplatesDemo'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <AfterHero/>
      <TemplatesDemo/>
      <Features/>
      <Footer/>
    </>
  )
}

export default LandingPage