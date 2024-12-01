import React from 'react'
import { NavLink } from 'react-router-dom';
import './Banner.scss'

function Banner() {
    return (
        <div className='bannerContainer'>
            <div className='container'>
                <div className='content'>
                    <p>Professional Cleaning Services</p>
                    <h1>Cleaning Solutions for all your needs</h1>
                    <h6>Keeping your living spaces clean and hygienic is essential for a healthy and comfortable environment.</h6>
                    <NavLink to='' className='buttonLink'>Get started</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Banner