import React from 'react'
import Banner from '../../Components/Banner/Banner'
import img1 from '../../../Assets/img1.jpg';
import img10 from '../../../Assets/img10.jpg';
import './Home.scss'
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoCheckmark, IoLeafSharp, IoTimeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import joy from '../../../Assets/JOY.jpg';
import { MdOutlineCleaningServices, MdAttachEmail, MdLocationPin, MdOutlineWifiCalling3 } from "react-icons/md";
import img3 from '../../../Assets/img3.jpg';
import img12 from '../../../Assets/img12.jpg';
import img2 from '../../../Assets/img2.jpg';
import img13 from '../../../Assets/img13.jpg';
import img14 from '../../../Assets/img14.jpg';
import img15 from '../../../Assets/img15.jpg';
import { FaPhone } from "react-icons/fa";
import FAQ from '../../Components/FAQ/FAQ';
import img8 from '../../../Assets/img8.jpg'


function Home() {
    return (
        <div>
            <Banner />

            <div className="HomeAboutContainer">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='imageContainer'>
                                <div className='image'>
                                    <img src={img1} alt="img" className='img1' />
                                    <img src={img10} alt='img' className='img2' />
                                </div>
                                <div className='imageContent'>
                                    <div className='content'>
                                        <div><RiDoubleQuotesR className='icon' /></div>
                                        <div className='text'>Best Cleaning service for your environment</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='AboutSession'>
                                <p>About Company</p>
                                <div className='pageTitle'>
                                    The Best Cleaning Services from Trusted group of Experts
                                    <div className='line'></div>
                                </div>
                                <div className='pageText'>
                                    Our commitment to excellence, attention to detail, and dedication to customer satisfaction set us apart as the go-to choice for all your cleaning needs.
                                </div>

                                <div className='qualities'>
                                    <div>
                                        <div className='quality'>
                                            <div ><IoCheckmark className='icon' /></div>
                                            <div className='text'>Professional, Trained Experts</div>
                                        </div>
                                        <div className='quality'>
                                            <div ><IoCheckmark className='icon' /></div>
                                            <div className='text'>Quality Cleaning Services</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='quality'>
                                            <div ><IoCheckmark className='icon' /></div>
                                            <div className='text'>Excellent Customer Services</div>
                                        </div>
                                        <div className='quality'>
                                            <div ><IoCheckmark className='icon' /></div>
                                            <div className='text'>Budget friendly Pricing plans</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='about'>
                                    <div className='detail'>
                                        <div className='image'><img src={joy} alt='joy' /> </div>
                                        <div className='name' >Joy Agunbiade</div>
                                    </div>

                                    <div className='knowMore' style={{ marginTop: '40px' }}>
                                        <NavLink to='/about' className='buttonLink'>Know More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cleaningServiceContainer'>
                <div className='container'>
                    <div className='pageTitle' style={{ maxWidth: '400px', color: '#fff' }}>
                        Popular Cleaning Services We Offer for You
                        <div className='line'></div>
                    </div>

                    <div className='cleaningContent'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='image'>
                                        <MdOutlineCleaningServices className='icon' />
                                    </div>
                                    <div className='detail'>
                                        <div className='title'>House Cleaning</div>
                                        <div className='text'>Transform your space with our meticulous house cleaning services.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='image'>
                                        <MdOutlineCleaningServices className='icon' />
                                    </div>
                                    <div className='detail'>
                                        <div className='title'>Office Cleaning</div>
                                        <div className='text'>Professional office cleaning services for a pristine and organized workspace.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='image'>
                                        <MdOutlineCleaningServices className='icon' />
                                    </div>
                                    <div className='detail'>
                                        <div className='title'>Laundry Cleaning</div>
                                        <div className='text'>Revitalize your fabrics with expert laundry cleaning for a fresh and crisp feel.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='image'>
                                        <MdOutlineCleaningServices className='icon' />
                                    </div>
                                    <div className='detail'>
                                        <div className='title'>Washroom Cleaning</div>
                                        <div className='text'>Maintain hygiene and cleanliness with thorough washroom cleaning services.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='image'>
                                        <MdOutlineCleaningServices className='icon' />
                                    </div>
                                    <div className='detail'>
                                        <div className='title'>Carpet Cleaning</div>
                                        <div className='text'>Professional carpet cleaning for a fresher, healthier home or office environment.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='image'>
                                        <MdOutlineCleaningServices className='icon' />
                                    </div>
                                    <div className='detail'>
                                        <div className='title'>Garden Cleaning</div>
                                        <div className='text'>Transform your outdoor oasis with professional garden cleaning services.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='services'>
                    <NavLink to='/services' className='buttonLink'>More Services</NavLink>
                </div>
            </div>

            <div className='ReasonsContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='reasonContent'>
                                <div className='image' style={{ paddingBottom: '30px' }}>
                                    <img src={img3} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='reasonContent'>
                                <div className='pageTitle'>
                                    Reasons to Choose us
                                    <div className='line'></div>
                                </div>
                                <div className='subTitle'>
                                    Behind our commitment to excellence are few key attributes that define who we are and what makes us different from any other.
                                </div>

                                <div className='reasons'>
                                    <div className='reason'>
                                        <div className='image'><IoLeafSharp className='icon' /></div>
                                        <div className='content'>
                                            <div className='title'>Top-Rated Company</div>
                                            <p>
                                                We hold a successful track record of satisfying our customers and getting back their bond money.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='reason'>
                                        <div className='image'><IoLeafSharp className='icon' /></div>
                                        <div className='content'>
                                            <div className='title'>Superior Quality</div>
                                            <p>
                                                We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='reason'>
                                        <div className='image'><IoLeafSharp className='icon' /></div>
                                        <div className='content'>
                                            <div className='title'>Eco-Friendly Products</div>
                                            <p>
                                                We use biodegradable products which do not harm the environment, pets or humans in any way.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='naturalProductContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-md-2'>
                            <div className=''>
                                <img src={img12} alt="" />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-md-1'>
                            <div className='productContent'>
                                <div className='pageTitle'>
                                    Natural Cleaning Products
                                    <div className='line'></div>
                                </div>
                                <p>We feel good about cleaning with our self-formulated, natural products that are better for the environment</p>
                                <div className='content'>
                                    <div className='leafImage'><IoLeafSharp className='icon' /></div>
                                    <div className='details'>
                                        <div className='title'>100% Safe & Organic</div>
                                        <div className='text'>We combine high concentrates of pure organic essential oils with quality plant-derived ingredients.</div>
                                    </div>
                                </div>

                                <div className='content'>
                                    <div className='leafImage'><IoLeafSharp className='icon' /></div>
                                    <div className='details'>
                                        <div className='title'>We Care About The Earth</div>
                                        <div className='text'>All of our packaging, bottles, cleaning equipment, even our uniforms come from recycled, fairtrade or low impact origins.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cleaningProcessContainer'>
                <div className='bigImage'>
                    <img src={img2} alt="" />
                </div>
                <div className='cleaningProcessWrapper'>
                    <div className='procedureContentContainer'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-12 col-sm-12'>
                                    <div className='procedureContent'>
                                        <div className='content'>
                                            <div className='top'>
                                                <span>01</span>
                                                <div className='title'>Ask and Schedule our Cleaning Services</div>
                                            </div>
                                            <div className='image'>
                                                <img src={img13} alt='' />
                                            </div>
                                        </div>
                                        <div className='overlay'></div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12'>
                                    <div className='procedureContent procedureContent2'>
                                        <div className='content'>
                                            <div className='image'>
                                                <img src={img15} alt='' />
                                            </div>
                                            <div className='top'>
                                                <span>02</span>
                                                <div className='title'>Get Professional Clean Expert advices</div>
                                            </div>
                                        </div>
                                        <div className='overlay'></div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12'>
                                    <div className='procedureContent'>
                                        <div className='content'>
                                            <div className='top'>
                                                <span>03</span>
                                                <div className='title'>Enjoy the cleanliness in your Place</div>
                                            </div>
                                            <div className='image'>
                                                <img src={img14} alt='' />
                                            </div>
                                        </div>
                                        <div className='overlay'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='BookingContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='booking'>
                                <div className='pageTitle' style={{ color: '#fff' }}>Book Now for the finest Cleaning Solution
                                    <div className='line'></div>
                                </div>
                                <p>
                                    Experience unmatched cleanliness with our premium cleaning solutions. Book now for a spotless and rejuvenated space.
                                </p>

                                <div className='contacts'>
                                    <div className='contact'>
                                        <span><FaPhone className='icon' /> </span>
                                        <div className='detail'>
                                            <div className='title'>Call Us</div>
                                            <div className='text'>+1 (613) 777-7011</div>
                                        </div>
                                    </div>

                                    <div className='contact'>
                                        <span><MdAttachEmail className='icon' /> </span>
                                        <div className='detail'>
                                            <div className='title'>Email Us</div>
                                            <div className='text'>
                                                <a href='mailto:joyagunbiadeweb@gmail.com'>joyagunbiadeweb@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='contacts'>
                                    <div className='contact'>
                                        <span><MdLocationPin className='icon' /> </span>
                                        <div className='detail'>
                                            <div className='title'>Location</div>
                                            <div className='text'>Ottawa, Ontario, Canada</div>
                                        </div>
                                    </div>

                                    <div className='contact'>
                                        <span><IoTimeOutline className='icon' /> </span>
                                        <div className='detail'>
                                            <div className='title'>Opening Hours</div>
                                            <div className='text'>Mon-Sat: 09:00 AM - 22:00 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='contactdetail'>
                                <p>
                                    Free Consultation
                                </p>
                                <div className='pageTitle'>
                                    Book Appointment <div className='line'></div>
                                </div>

                                <NavLink to='contact' className='buttonLink'> Book Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='faqSessionContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="image">
                                <img src={img8} alt='' />
                                <div className="query">
                                    <span>
                                        <MdOutlineWifiCalling3 className='icon' />
                                    </span>
                                    <div className='right'>
                                        <div className='' style={{ fontFamily: 'var(--textFamily)' }}>For Queries</div>
                                        <div className='phone'>+1 (289) 968-0162</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <FAQ />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home