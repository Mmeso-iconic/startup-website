import React from 'react'
import { Button } from './button'
import  Google from '../assets/icons/Google.svg'
import  Microsoft from '../assets/icons/Microsoft.svg'
import  Airbnb from '../assets/icons/Airbnb.svg'
import  Facebook from '../assets/icons/Facebook.svg'
import  Spotify from '../assets/icons/Spotify.svg'
import './styles/shared.css'
import './styles/Partner.css'

function Partner() {
    return (
    <>
        <div className='Partner-Section'>
            <div className="body-texts">
                <p className="first-text">PARTNERS</p>
                <h1 className="main-text">Lorem Ipsum Dolor </h1>
                <p className="description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="partner-logo">
                <img src= {Google} className="partner-logo1" alt="Google Logo"/>
                <img src= {Microsoft} className="partner-logo2" alt="Microsoft Logo"/>
                <img src= {Airbnb} className="partner-logo3" alt="Airbnb Logo"/>
                <img src= {Facebook} className="partner-logo4" alt="Facebook Logo"/>
                <img src= {Spotify} className="partner-logo5" alt="Spotify Logo"/>
            </div>
        
            <div className='hero-btns'>
                    <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Learn More </Button>
            </div>
        </div>
    </>
    )
}

export default Partner
