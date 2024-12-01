import React from 'react';
import './PagesHeader.scss';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function PagesHeader({ pageName }) {
    return (
        <div className='pageHeaderContainer'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='home'><NavLink to="/" style={{ textDecoration: 'none', color: 'var(--textColor)' }}>Home</NavLink></div>
                    <div className='iconImage'> <MdOutlineKeyboardDoubleArrowRight className='icon' /> </div>
                    <div className="">{pageName}</div>
                </div>
            </div>
        </div>
    )
}

export default PagesHeader