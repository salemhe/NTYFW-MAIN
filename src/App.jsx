import './App.css'
import AboutSection from './components/AboutSection'
import CourseBreakdown from './components/CourseBreakdown'
import Credential from './components/Credentials'
import FAQ from './components/FAQ'
import HeroSection from './components/HeroSection'
import PricingCTA from './components/PricingCTA'
import Testimonials from './components/Testimonials'
import WhatYouGet from './components/WhatYouGet'


function App() {


  return (
    <>
      {/* <h1 className='font-bold text-3xl'>Hello world</h1> */}
      <HeroSection />
      <Credential />
      <AboutSection />
      <CourseBreakdown />
      <WhatYouGet />
      <Testimonials />
      <FAQ />
      <PricingCTA />
    </>
  )
}

export default App