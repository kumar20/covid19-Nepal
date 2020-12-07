import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom'
import './intropage.css'
import Summary from './landingPage/summary'
import WorldPage from './landingPage/world'
import Municipality from './landingPage/municipality'
class IntroPage extends Component {
    constructor() {
        super()
    }
    handleClick(){

    }
    render() {
        return (
            <div>
                <div className='div1'>COVID-19 INFORMATION NEPAL</div>

                <div id='container'>
                    <div className='three-divs'> <Link to='/WhatIsCorona'>What is Covid-19</Link></div>
                    <div className='three-divs'> <Link to='/myths'>Myths about Covid-19</Link> </div>
                    <div className='three-divs'> <Link to=''>News of Covid-19 </Link></div>


                </div>
                <div id='container1'>
                    <Summary></Summary>
                </div>
                <div id='container1'>
                    <div className='two-divs'></div>
                    
                </div>

                    
            </div>
        )
    }
}
export default IntroPage