import React from 'react'
import './styles/shared.css'
import './styles/Serviceprices.css'
import {Button} from './button'
import Checkicon from '../assets/icons/Checkicon.svg'

function Serviceprices() {
    return (
    
        <div className='Port-Section'>
            <div className="body-texts">
                <p className="first-text">PLANS</p>
                <h1 className="main-text">Our Services </h1>
                <p className="description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="theprices">
                <div className="thepricecard">
                    <p className="pricetype">Basic</p>
                    <p className="pricetag">$100<span>/month</span></p>
                    <p className="description-lowertext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="check-lorem">
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>

                    </div>
                    <div className='hero-btns'>
                            <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Learn More </Button>
                    </div>
                </div>
                <div className="thepricecard">
                    <p className="pricetype">Plus</p>
                    <p className="pricetag">$250<span className="description-lowertext">/month</span></p>
                    <p className="description-lowertext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="check-lorem">
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>

                    </div>
                    <div className='hero-btns'>
                            <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Learn More </Button>
                    </div>
                </div>
                <div className="thepricecard">
                    <p className="pricetype">Pro</p>
                    <p className="pricetag">$400<span className="description-lowertext">/month</span></p>
                    <p className="description-lowertext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="check-lorem">
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>
                        <p className="price-description"><img src={Checkicon} alt="Check icon" className="checkimage"/> Lorem ipsum, dolor sit </p>

                    </div>
                    <div className='hero-btns'>
                            <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Learn More </Button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Serviceprices
