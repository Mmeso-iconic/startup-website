import React from 'react'
import Peg from '../assets/images/Peg.png'
import Richard from '../assets/images/Richard.png'
import Alexandra from '../assets/images/Alexandra.png'
import Janet from '../assets/images/Janet.png'
import './styles/shared.css'
import './styles/Team.css'
import { Button } from './button'

function Team() {
    return (
        <div className='Partner-Section'>
            <div className="body-texts">
                <p className="first-text">TEAM</p>
                <h1 className="main-text">Our Talents </h1>
                <p className="description-text">Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,. </p>
            </div>
            <div className="partner-logo">
                <div className="team-cards card1">
                    <img src={Peg} alt="team member" className="team-img" />
                    <p className="team-name">Peg Legge</p>
                    <p className="team-title">CEO</p>
                </div>
                <div className="team-cards card2">
                    <img src={Richard} alt="team member" className="team-img" />
                    <p className="team-name">Richard Guerra</p>
                    <p className="team-title">CTO</p>
                </div>
                <div className="team-cards card3">
                    <img src={Alexandra} alt="team member" className="team-img" />
                    <p className="team-name">Alexandra Stolz</p>
                    <p className="team-title">DESIGNER</p>
                </div>
                <div className="team-cards card4">
                    <img src={Janet} alt="team member" className="team-img" />
                    <p className="team-name">Janet Bray</p>
                    <p className="team-title">DEVELOPER</p>
                </div>
            </div>
        
            <div className='hero-btns'>
                    <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Learn More </Button>
            </div>
        </div>
    )
}

export default Team
