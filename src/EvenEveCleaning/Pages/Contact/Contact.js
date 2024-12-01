import React, { useState } from 'react';
import './Contact.scss'
import PagesHeader from '../../Components/pagesHeader/PagesHeader';
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import emailjs from "emailjs-com";

function Contact() {
    const ref = React.useRef();
    const initialValue = {
        fullName: "",
        message: "",
        email: "",
    }
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const clearValues = () => {
        console.log("Initial", initialValue)
        setValues(initialValue)
        ref.current.reset();
    }

    // get input values
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };

    // handle errors
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.fullName) errorsValue.fullName = "Name is required";
        if (!targets.message) errorsValue.message = "Type  a required";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    const submitForm = async (ev) => {
        ev.preventDefault();
        let v = handleError(values);
        setSuccessMessage(false)
        setSubmitError(false)
        // check if there is any eror available and handle here 
        if (v > 0) {
            console.log("error");
            setLoading(false)
        }
        else {
            sendEmail(ev);
        }
    };
    // i use ges detail for the function
    function sendEmail(ev) {
        setLoading(true)
        emailjs.sendForm(
            'service_w9bmuq7',
            'template_pngutyh',
            ev.target,
            'aDa4G9MvkUKU8oiBk'
        ).then(res => {
            setLoading(false)
            setSuccessMessage(true)
            setSubmitError(false)
            clearValues();
        }).catch(err => {
            setLoading(false);
            setSubmitError(true)
            setSuccessMessage(false)
            console.log(err)
        })
    }

    return (
        <div>
            <PagesHeader pageName='Contact' />

            <div className='ContactContainer'>
                <div className='container'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className='pageTitle' style={{ textAlign: 'center', position: 'relative', width: 'auto' }}>
                            Contact Us
                            <div className='line'></div>
                        </div>

                        <div className='contactText'>
                            Experience unmatched cleanliness with our premium cleaning solutions. <br /> Book now for a spotless and rejuvenated space.
                        </div>
                    </div>

                    <div className='row' style={{ paddingTop: '40px' }}>
                        <div className='col-lg-6 col-md-12'>
                            <div className='imagebg'>
                                <div className='contactDetail'>
                                    <div className='contact'>
                                        <FaLocationDot className='icon' />
                                        <div className="contactWrap">
                                            <div className="title">Our Locations</div>
                                            <div className='text'>32, Ottawa, Ontario, Canada</div>
                                        </div>

                                    </div>
                                    <div className='contact'>
                                        <FaPhoneVolume className='icon' />
                                        <div className="contactWrap">
                                            <div className="title">Phone Numbers</div>
                                            <div className='text'>+1 (613) 777-7011</div>
                                        </div>
                                    </div>
                                    <div className='contact'>
                                        <MdEmail className='icon' />
                                        <div className="contactWrap">
                                            <div className="title">Email</div>
                                            <div className='text'><a href='mailTo:genesisemploymentsolution@gmail.com'>joyagunbiadeweb@gmail.com</a> </div>
                                        </div>
                                    </div>
                                    <div className='contact'>
                                        <IoTime className='icon' />
                                        <div className="contactWrap">
                                            <div className="title">Opening Time</div>
                                            <div className='text'>Mon-Fri: 9:00 am – 5:00 pm <br />
                                                Sat-Sun: 11:00 am – 16:00 pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className='pageTitle' >
                                Get In Touch
                                <div className='line'></div>
                            </div>

                            <form onSubmit={submitForm} ref={ref}>
                                <div className="contact-details">
                                    <div className="contact-field">Field marks with <span>*</span> are required</div>
                                    <div className="row">
                                        {successMessage && <div className='Message successMessage'>
                                            <div className='text'>Form submitted successfully</div>
                                        </div>
                                        }
                                        {submitError && <div className='Message submitError'>
                                            <div className='text'>Form not submitted </div>
                                        </div>
                                        }
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="contact-form">
                                                <label>Full Name <span>*</span></label>
                                                <input type="text" id="" onChange={handleChange} name="fullName" placeholder="Full name" className="inputfield" />
                                                {errors ? <p> {errors.fullName}</p> : ""}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="contact-form">
                                                <label>Email <span>*</span></label>
                                                <input type="email" id="" onChange={handleChange} name="email" placeholder="email" className="inputfield" />
                                                {errors ? <p>{errors.email}</p> : ""}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="contact-form">
                                                <label>Message <span>*</span></label>
                                                <textarea id="" onChange={handleChange} name="message" placeholder="message" className="textarea" rows="4"></textarea>
                                                {errors ? <p>{errors.message}</p> : ""}
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            {loading ?
                                                <input value="Submitting..." className="buttonLink" style={{ cursor: 'default', background: '#777373;' }} />
                                                :
                                                <input type="submit" value="Submit" className="buttonLink" />

                                            }

                                        </div>

                                        {successMessage && <div className='Message successMessage' style={{ marginTop: '30px' }}>
                                            <div className='text'>Form submitted successfully</div>
                                        </div>
                                        }
                                        {submitError && <div className='Message submitError' style={{ marginTop: '30px' }}>
                                            <div className='text'>Form not submitted </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact