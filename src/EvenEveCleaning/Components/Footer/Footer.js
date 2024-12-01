import React from 'react';
import './Footer.scss'
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight, FaPhoneVolume } from "react-icons/fa";
import { FaCheck, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import footerRibbon from '../../../Assets/footer-ribbon.png'
import logo from '../../../Assets/logo.png'

function Footer() {
    return (
        <div className='footerContainer'>
            <div className="container">
                <div className='ribbon'>
                    <img src={footerRibbon} alt='' />
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='footerDetail'>
                            <div className='logo'>
                                <img src={logo} alt="" />
                            </div>
                            <div className='aboutText'>
                                <span style={{ color: 'var(--primaryColor)', fontWeight: '600' }}>EvenEve</span> is a fully integrated janitorial services provider, offering comprehensive, high-quality, and reliable cleaning solutions to commercial, corporate, industrial, and residential clients.
                            </div>
                            <NavLink to='about' className='buttonLink'>Read more <span><FaLongArrowAltRight className='icon' /></span></NavLink>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='footerContent'>
                            <div className='title'>Cleaning Services</div>
                            <div className='listContent'>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>Apartment Cleaning</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>House Cleaning</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>Move In / Move Out</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>After Renovation</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>Curtain Cleaning</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>Window Cleaning</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>Apartment Cleaning</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>Commercial Cleaning</NavLink>
                                </div>
                                <div className='details'>
                                    <span><FaCheck className='icon' /></span>
                                    <NavLink to='/services' className='footerNav'>Residential Cleaning</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='footerContent'>
                            <div className='title'>Contact Information</div>
                            <div className='contactDetail'>
                                <div className='contact'>
                                    <FaLocationDot className='icon' />
                                    <div className='text'>32, Ottawa, Ontario, Canada</div>
                                </div>
                                <div className='contact'>
                                    <FaPhoneVolume className='icon' />
                                    <div className='text'>+1 (613) 777-7011</div>
                                </div>
                                <div className='contact'>
                                    <MdEmail className='icon' />
                                    <div className='text'><a href='mailTo:genesisemploymentsolution@gmail.com'>joyagunbiadeweb@gmail.com</a> </div>
                                </div>
                                <div className='contact'>
                                    <IoTime className='icon' />
                                    <div className='text'>Mon-Fri: 9:00 am – 5:00 pm <br />
                                        Sat-Sun: 11:00 am – 16:00 pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer