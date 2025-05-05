import React from 'react'
import NavbarComponent from './components/Navbar'
import HeroComponent from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import MeetOurPastor from './components/MeetOurPastor'
import Youth from './components/Youth'
import ChurchEventPage from './components/ChurchEventPage'
import ChurchFooterSection from './components/ChurchFooterSection'

const Home = () => {
  return (
    <div>
        <NavbarComponent />
        <HeroComponent />
        <WhoWeAre />
        <MeetOurPastor />
        <Youth/>
        <ChurchEventPage />
        <ChurchFooterSection />
    </div>
  )
}

export default Home