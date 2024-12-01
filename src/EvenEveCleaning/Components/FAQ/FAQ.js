import React, { useState } from 'react';
import './FAQ.scss';
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
    const faqData = [
        {
            service: 'What services do you offer?',
            answer: 'We offer a comprehensive range of cleaning services, including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, and more. Our goal is to meet your specific cleaning needs.'
        },
        {
            service: 'How can I schedule a cleaning service?',
            answer: 'Scheduling a cleaning service is easy. You can call us directly, visit our website, or use our online booking system to select the services you need and choose a convenient time for the cleaning.'
        },
        {
            service: 'Are your cleaning products safe?',
            answer: 'Yes, we prioritize the health and safety of our clients. We use eco-friendly and non-toxic cleaning products that are effective in removing dirt and grime without posing any harm to you, your family, or pets.',

        },
        {
            service: 'Do I need to provide cleaning supplies?',
            answer: "No, you don't need to provide any cleaning supplies. We bring our own equipment and cleaning products. If you have specific preferences or allergies, please let us know, and we'll do our best to accommodate.",
        },
        {
            service: 'Is your staff insured and bonded?',
            answer: "Specify whether your company brings its own cleaning supplies and equipment or if clients are expected to provide them. If you provide supplies, highlight the quality and eco-friendliness of your products."
        },
        {
            service: 'How long will the cleaning service take?',
            answer: "The duration of the cleaning service depends on the size of the space and the scope of work. We can provide you with an estimate based on your specific requirements during the booking process.",
        }
    ]

    const [isExtended, setIsExtended] = useState(null);
    const handleToggle = (task, index) => {
        if (isExtended === index) {
            setIsExtended(null)
        } else {
            setIsExtended(index)
        }
        // setDropdowncontent([task]); 
    };
    return (
        <div className='faqContainer'>
            <div className='pageTitle'>
                Frequent Queries to help get clear solutions<div className='line'></div>
            </div>
            {faqData.map((data, index) => {
                return (
                    <div className='wrapper' key={index} >
                        <div className="titleContainer" onClick={() => {
                            handleToggle(data, index);
                        }}>
                            <div className={`title ${isExtended === index ? 'title titleColor' : 'title'}`}>
                                {data.service}
                                {isExtended === index ?
                                    <FaMinus className='icon' /> :
                                    <FaPlus className='icon' />

                                }
                            </div>
                        </div>

                        {isExtended === index && (
                            <div className=''>
                                <div className="answer">{data.answer} </div>
                            </div>
                        )}
                    </div>
                )
            })}

        </div>
    )
}

export default FAQ