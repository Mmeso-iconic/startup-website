import React from 'react'
import './styles/shared.css'
import './styles/Theportfolio.css'
import {Button} from './button'

import Page1 from '../assets/images/page1.png'
import Page2 from '../assets/images/page2.png'
import Page3 from '../assets/images/page3.png'
import Page4 from '../assets/images/page4.png'
import Page5 from '../assets/images/page5.png'
import Page6 from '../assets/images/page6.png'
import Page7 from '../assets/images/page7.png'
import Page8 from '../assets/images/page8.png'

function Theportfolio() {
    return (
        <div className='Port-Section'>
            <div className="body-texts">
                <p className="first-text">WORKS</p>
                <h1 className="main-text">PORTFOLIO </h1>
                <p className="description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="web-pages">
                <img src={Page1} alt="A landing Page" className="web-image" />
                <img src={Page2} alt="A landing Page" className="web-image" />
            </div>
            <div className="web-pages">
                <img src={Page3} alt="A landing Page" className="web-image" />
                <img src={Page4} alt="A landing Page" className="web-image" />
            </div>
            <div className="web-pages">
                <img src={Page5} alt="A landing Page" className="web-image" />
                <img src={Page6} alt="A landing Page" className="web-image" />
            </div>
            <div className="web-pages">
                <img src={Page7} alt="A landing Page" className="web-image" />
                <img src={Page8} alt="A landing Page" className="web-image" />
            </div>
            <div className='hero-btns'>
                    <Button className='btns'buttonStyle='btn--secondary' buttonSize='btn--medium'> Learn More </Button>
            </div>
        </div>
    )
}

export default Theportfolio
