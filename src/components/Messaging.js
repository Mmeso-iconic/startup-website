import React from 'react'
import { Button } from './button'
import './styles/Messaging.css'
import './styles/shared.css'
import Messaging from '../assets/images/messaging.png'

function messaging() {
    return (
        <div className='the-container'>
            <div className="herosec-image">
                <img
                    src={Messaging}
                    className="hero-image"
                    alt="Illustration of different messaging icons"
                />
            </div>
            <div className="body-texts">
                <h1 className="main-text">Lorem ipsum dolor sit amet consectetur</h1>
                <p className="description-lowertext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa
                    nesciunt delectus iste?</p>
                <div className='hero-btns'>
                    <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Explore </Button>
                </div>
            </div>

        </div>
    )
}

export default messaging
