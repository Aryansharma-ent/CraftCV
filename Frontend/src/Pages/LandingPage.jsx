import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AfterHero from '../components/AfterHero'
import TemplatesDemo from '@/components/TemplatesDemo'
import Features from '@/components/Features'

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <AfterHero/>
      <TemplatesDemo/>
      <Features/>
    </>
  )
}

export default LandingPage