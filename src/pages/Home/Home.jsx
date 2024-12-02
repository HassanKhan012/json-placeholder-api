import React from 'react'
import TopNavbar from '../../components/TopNavbar'
import Navbar from '../../components/Navbar'
import HeroSec from '../../components/HeroSec'
import SponsorSec from '../../components/SponserSec'
import TryItSection from '../../components/TryItSection'
import FileStackSection from '../../components/FileStackSection'
import InfoText from '../../components/InfoText'
import { Resources } from '../../components/Resources'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <TopNavbar/>
        <Navbar/>
        <HeroSec/>
        <SponsorSec/>
        <TryItSection/>
        <FileStackSection/>
        <InfoText/>
        <Resources/>
        <Footer/>
    </div>
  )
}

export default Home