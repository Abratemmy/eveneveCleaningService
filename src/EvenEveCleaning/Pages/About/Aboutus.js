import React, { useState } from 'react'
import PagesHeader from '../../Components/pagesHeader/PagesHeader';
import "./About.scss";
import img4 from '../../../Assets/img9.jpg'
import { FaCheck, FaPhoneVolume } from "react-icons/fa6";
import guaranteed from '../../../Assets/guaranteed.png';
import { GiMissileSwarm, GiMissileMech } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import valueImg from '../../../Assets/img4.jpg'
import { IoLeafSharp } from "react-icons/io5";

function Aboutus() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div>
            <PagesHeader pageName='About' />

            <div className='AboutContainer'>
                <div className='container'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='pageTitle' style={{ textAlign: 'center', position: 'relative', width: 'auto' }}>
                            About Our Company
                            <div className='line'></div>
                        </div>
                    </div>

                    <div className='aboutText'>
                        Cleaning can be a chore and we know you have many choices when you consider hiring a comprehensive, high quality, reliable cleaning service.
                    </div>

                    <div className='row' style={{ padding: '40px 0px' }}>
                        <div className='col-lg-6 col-md-12'>
                            <div className='aboutImage'>
                                <img src={img4} alt='about' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='aboutToggle'>
                                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                                    <div>About Us</div>
                                </div>
                                <span>|</span>
                                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                                    <div>We Provide</div>
                                </div>
                                <span>|</span>
                                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                                    <div>With Us</div>
                                </div>
                            </div>
                            <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>
                                <div className='pageText'>
                                    <div className='text'>
                                        EvenEve Company is a fully integrated janitorial services provider, offering comprehensive, high-quality, and reliable cleaning solutions to commercial, corporate, industrial, and residential clients.
                                    </div>
                                    <div className='text'>
                                        Our strong management and dedicated work ethic are the foundation of our business philosophy, ensuring the consistent delivery of top-tier cleaning services. We take pride in maintaining direct access to our managing director, making our leadership team accountable and responsive to client needs.
                                    </div>
                                    <div className='text'>
                                        Taking the stress out of any aspect of cleaning is what we specialise in. We will come to your premises and offer a free quote, so you know exactly what you’ll be spending
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>
                                <div className='pageText'>

                                    <div className='text'>
                                        Cleaning can often feel like a chore, and we understand that you have many options when it comes to choosing a maid service. That’s why we continuously strive to elevate our already high standards, ensuring you view us as the best in the industry. It’s not just about trusting the cleaning team you invite into your home — it’s about trusting that they will deliver exceptional, top-quality service every time.
                                    </div>
                                    <div className='title'>We Provide</div>
                                    <div className='text' style={{ paddingBottom: '10px' }}>
                                        <span><FaCheck className='icon' /></span>One-off, weekly or fortnightly visits
                                    </div>
                                    <div className='text' style={{ paddingBottom: '10px' }}>
                                        <span><FaCheck className='icon' /></span>100% satisfaction guarantee
                                    </div>
                                    <div className='text' style={{ paddingBottom: '10px' }}>
                                        <span><FaCheck className='icon' /></span>All cleaning materials and equipment

                                    </div>
                                    <div className='text' style={{ paddingBottom: '10px' }}>
                                        <span><FaCheck className='icon' /></span>Vetted & background-checked cleaners
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 3 ? "tabContent active-tabContent" : "tabContent"}>
                                <div className='withUs'>
                                    <div className='content'>
                                        <span>1</span>
                                        <div className='wrapper'>
                                            <div className='title'>We treat your home like ours</div>
                                            <div className='pageText'>
                                                <div className='text'>
                                                    At EvenEve Company, we are fully bonded and insured, meaning you can have peace of mind when we enter your home.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <span>2</span>
                                        <div className='wrapper'>
                                            <div className='title'>satisfaction guarantee</div>
                                            <div className='pageText'>
                                                <div className='text'>
                                                    Our cleaning crew are professionally trained, and if you’re ever unhappy with any area we’ve cleaned, we’ll and reclean it next day.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='content'>
                                        <span>3</span>
                                        <div className='wrapper'>
                                            <div className='title'>Immediate Online Quotes</div>
                                            <div className='pageText'>
                                                <div className='text'>
                                                    Hosting a party or expecting guests? We'll provide you with an instant price quote, allowing you to relax and enjoy your event without worrying about the cleanup.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='content'>
                                        <span>4</span>
                                        <div className='wrapper'>
                                            <div className='title'>We Are Experts</div>
                                            <div className='pageText'>
                                                <div className='text'>
                                                    We lead the industry in scale and reach, supported by a flexible, expansive network that consistently delivers outstanding results.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='banner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-4 col-sm-12'>
                                <div className='guaranteedImage'>
                                    <img src={guaranteed} alt="" />
                                </div>
                            </div>
                            <div className='col-lg-9 col-md-8 col-sm-12'>
                                <div className='guaranteedText'>
                                    <div className='title'>Satisfaction Guaranteed!</div>
                                    <div className='pageText' style={{ color: '#fff' }}>
                                        At EvenEve, your satisfaction is our top priority, and we guarantee it 100%. If you're not completely satisfied with any area we've cleaned, just give us a call within 24 hours, and we'll return to reclean it at no additional cost. This ensures that choosing EvenEve is virtually risk-free. Our maids undergo a thorough screening process as part of our rigorous recruitment, and each one is trained through our comprehensive Maid University program.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='visionMission'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='contentWrapper'>
                                    <div className='image'>
                                        <GiMissileSwarm className='icon' />
                                    </div>
                                    <div className="content">
                                        <div className='title'>
                                            Our Mission
                                        </div>
                                        <div className='pageText'>
                                            Our goal is to become a national leader in the cleaning services industry by providing reliable, high-quality, and cost-effective cleaning solutions to our clients.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-12'>
                                <div className='contentWrapper'>
                                    <div className='image'>
                                        <GiMissileMech className='icon' />
                                    </div>
                                    <div className="content">
                                        <div className='title'>
                                            Our Vision
                                        </div>
                                        <div className='pageText'>
                                            To be the leading provider of cleaning services nationwide, recognized for our commitment to excellence, sustainability, and customer satisfaction. At Eveneve, we aim to transform spaces through reliable, innovative, and eco-friendly cleaning solutions, creating healthier environments for our clients and communities.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='banner' style={{ padding: '40px 0px' }}>
                    <div className='container'>
                        <div className='bannerSecond'>
                            <div className='title'>
                                If you’re not happy, just let us know and
                                <span> we’ll work to make it right</span>
                            </div>

                            <NavLink to="/contact" className='buttonLink'>
                                <span><FaPhoneVolume className='icon' /></span>JUST CONTACT US
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='ValuesContainer'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='pageTitle' style={{ textAlign: 'center', position: 'relative', width: 'auto' }}>
                                Our Values
                                <div className='line'></div>
                            </div>
                        </div>
                        <div className='aboutText'>
                            Our goal is your satisfaction.
                        </div>

                        <div className='row' style={{ paddingTop: '50px' }}>
                            <div className='col-lg-6 col-md-12'>
                                <div className='image' style={{ marginBottom: '30px' }}>
                                    <img src={valueImg} alt="" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className='content'>
                                    <div className='wrapper'>
                                        <div className='image'>
                                            <IoLeafSharp className='icon' />
                                        </div>
                                        <div className='text'>
                                            <div className='title'>Eco Friendly Product</div>
                                            <div className='pageText'>
                                                We carefully choose the best and most natural cleaning products that give amazing results.
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className='image'>
                                            <IoLeafSharp className='icon' />
                                        </div>
                                        <div className='text'>
                                            <div className='title'>Expansion / Growth</div>
                                            <div className='pageText'>
                                                We establish a strong presence in the community and foster long-term relationships, all while continually expanding. As a result, we consistently recruit more individuals to join our team.
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className='image' >
                                            <IoLeafSharp className='icon' />
                                        </div>
                                        <div className='text'>
                                            <div className='title'>Excellence and Innovation</div>
                                            <div className='pageText'>
                                                We train our staff to maintain the highest service standards, while keeping up with the latest advancements in eco-friendly products and technologies. This enables us to offer the best solutions for our clients' homes.
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className='image'>
                                            <IoLeafSharp className='icon' />
                                        </div>
                                        <div className='text'>
                                            <div className='title'>Client oriented</div>
                                            <div className='pageText'>
                                                We serve our clients as if we were serving ourselves. We value their feedback and we use it to improve our work.
                                            </div>
                                        </div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className='image'>
                                            <IoLeafSharp className='icon' />
                                        </div>
                                        <div className='text'>
                                            <div className='title'>Budget Price Plans</div>
                                            <div className='pageText'>
                                                We provide affordable budget price plans, ensuring spotless and cost-effective cleaning solution.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus