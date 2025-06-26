import React from 'react'
import Service from '../assets/images/services.png'
import './styles/shared.css'
import './styles/Services.css'
import { Button } from './button'

function Services() {
    return (
        <div className='the-container2'>
                <div className="body-texts">
                    <h1 className="main-text">Lorem ipsum dolor sit amet consectetur</h1>
                    <p className="description-lowertext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa
                        nesciunt delectus iste?</p>
                    <div className='hero-btns'>
                        <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Explore </Button>
                    </div>
                </div>
                <div className="herosec-image">
                        <img src={Service} className="hero-image" alt="Illustration of a guy pressing a laptop" />
                </div>
                
        </div>
    )
}

export default Services
