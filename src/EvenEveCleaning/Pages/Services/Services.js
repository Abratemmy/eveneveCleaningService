import React from 'react'
import PagesHeader from '../../Components/pagesHeader/PagesHeader'
import './Services.scss';
import logo from '../../../Assets/logo.png';
import { GiVacuumCleaner } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Services() {

    const servicelist = [
        {
            id: 1,
            title: 'Apartment Cleaning',
            text: 'Eveneve Company offers a program designed to service residents of apartments and condominiums.',
        },

        {
            id: 2,
            title: 'House Cleaning',
            text: 'At Eveneve Company, we provide thorough and reliable house cleaning services, ensuring your home stays spotless and welcoming.',
        },

        {
            id: 3,
            title: 'Сarpet Сleaning',
            text: 'Eveneve Company offers professional carpet cleaning services, leaving your carpets fresh, clean, and revitalized.',
        },

        {
            id: 4,
            title: 'Move In / Move Out',
            text: 'Eveneve Company specializes in move-in and move-out cleaning, ensuring your space is spotless and ready for its next chapter.',
        },
        {
            id: 5,
            title: 'After Renovation',
            text: 'Eveneve Company provides expert after-renovation cleaning, leaving your space dust-free, polished, and ready to enjoy.',
        },
        {
            id: 6,
            title: 'Curtain Cleaning',
            text: 'Eveneve Company offers professional curtain cleaning services, restoring freshness and elegance to your home decor.',
        },
        {
            id: 7,
            title: 'Window Cleaning',
            text: 'Eveneve Company delivers streak-free window cleaning services, bringing clarity and brightness to your home or office.',
        },
        {
            id: 8,
            title: 'Commercial Cleaning',
            text: 'Eveneve Company provides top-notch commercial cleaning services, creating clean and productive workspaces for your business.',
        },
        {
            id: 9,
            title: 'Washroom Cleaning',
            text: 'Eveneve Company ensures spotless and sanitized washrooms with our professional cleaning services, prioritizing hygiene and freshness.',
        },
        {
            id: 10,
            title: 'Garden Cleaning',
            text: 'Eveneve Company offers expert garden cleaning services, keeping your outdoor spaces tidy, vibrant, and inviting.',
        }

    ]
    return (
        <div>
            <PagesHeader pageName='Our Services' />

            <div className='ServiceContainer'>
                <div className='container'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='pageTitle' style={{ textAlign: 'center', position: 'relative', width: 'auto', color: '#fff' }}>
                            Our Services
                            <div className='line'></div>
                        </div>
                    </div>

                    <div className='serviceText'>
                        Popular Cleaning Services We Offer for You
                    </div>
                </div>

                <div className='' style={{ paddingTop: '60px' }}>
                    <div className='CardContainer'></div>
                    <div className='container'>
                        <div className='row service-cards'>
                            {servicelist.map((data, index) => {
                                return (
                                    <div className="col-12 col-md-6  col-xl-4 mx-auto service-card" key={index}>
                                        <div className={`flip-card wow fadeInUp ${index % 2 === 1 ? 'flip-x' : 'flip-y'}`} data-wow-offset="0" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                            <div className="front-face">
                                                <div className="front-face-inner">
                                                    <div className="icon-wrapper "><GiVacuumCleaner className='icon' /></div>
                                                    <div className="title-wrapper ">
                                                        <h4 className="title">{data.title}</h4>
                                                    </div>
                                                    <div className="desc-wrapper">
                                                        <p className="desc">{data.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="back-face" data-bg-img="assets/images/services/service-bg-1.jpg" >
                                                <div className="overlay-color"></div>
                                                <div className="back-face-inner">
                                                    <div className="imagelogo">
                                                        <img src={logo} alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <div className='buttonLink' style={{ width: 'fit-content', cursor: 'grab' }}>And More</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{ padding: '50px 0px' }}>
                <div className='container'>
                    <div className='pageTitle'>Our Cleaning Services
                        <div className='line'></div>
                    </div>

                    <div className='pageText'>
                        Our unique cleaning system sets us apart, earning the loyalty of our customers by delivering thorough services that keep their homes and apartments spotless, even down to the smallest details. Known as our Detail-Clean Rotation System, this proven approach has successfully completed over five million cleans!
                    </div>

                    <div className='servicebg'>
                        <div className='phone'>
                            <FaPhoneVolume className='icon' />
                            <div className='text'>Phone: <span>+1 (613) 777-7011 </span></div>
                        </div>

                        <div className='right'>
                            <div className='days'>
                                <IoTime className='icon' />
                                <div className='text'>Mon-Fri: 9:00 am – 5:00 pm <br />
                                    Sat-Sun: 11:00 am – 16:00 pm
                                </div>
                            </div>
                            <NavLink to='/contact' className='buttonLink'>Get Free Estimate</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services