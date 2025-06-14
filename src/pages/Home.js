import React from 'react'
import '../App.css'
import Herosection from '../components/Herosection'
import Partner from '../components/Partner'
import Messaging from '../components/Messaging'
import Services from '../components/Services'
import Team from '../components/Team'


function Home() {
  return (
    <>
      <Herosection />
      <Partner />
      <Messaging />
      <Services />
      <Team />
    </>
  )
}

export default Home
