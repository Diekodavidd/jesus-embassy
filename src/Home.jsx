import React from 'react'
import NavbarComponent from './components/Navbar'
import HeroComponent from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import MeetOurPastor from './components/MeetOurPastor'
import Youth from './components/Youth'
import ChurchEventPage from './components/ChurchEventPage'
import ChurchFooterSection from './components/ChurchFooterSection'
import CoreMessage from './components/CoreMessage'
import LifeAtEmbassy from './components/LifeAtEmbassy'
import GetInvolved from './components/GetInvolved'

const Home = () => {
  return (
    <div>
        <NavbarComponent />
        {/* <HeroComponent /> */}
        <CoreMessage />
        <WhoWeAre />
        <LifeAtEmbassy />
        <MeetOurPastor />
        <Youth/>
        <ChurchEventPage />
        <GetInvolved />
        <ChurchFooterSection />
    </div>
  )
}

export default Home