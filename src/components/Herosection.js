import React from 'react';
import { Button } from './button';
import './styles/Herosection.css';
import HeaderImage from '../assets/images/header_image.png';



function Herosection() {
    return (
        <div className='hero-container'>
            <div className="hero-texts">
                <p className="welcometext">WELCOME</p>
                <h1 className="hero-text">This is a startup founded just for you  </h1>
                <p className="herotext-description">Fuel your startup’s journey with powerful tools and seamless 
                    support. From idea to launch, we help you move faster, smarter, and bolder—so you can focus on what 
                    truly matters.</p>
                <div className='hero-btns'>
                    <Button className='btns'buttonStyle='btn--primary' buttonSize='btn--medium'> Explore </Button>
                </div>
            </div>
            <div className="herosec-image">
                <img
                    src={HeaderImage}
                    className="hero-image"
                    alt="Idea bulb and people putting stuff into it"
                />
            </div>
        </div>

    )
}

export default Herosection
