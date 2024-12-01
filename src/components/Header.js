import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    let links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact', link: '/contact' },
        { name: 'Joy Agunbiade', link: 'http://joyagunbiade.com' },
    ]

    let [isOpen, setIsOpen] = useState(false)
    console.log('isopen', isOpen)
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='lg:px-10 py-3 px-7 lg:flex justify-between items-center bg-white'>
                {/* logo here */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <div className='imagelogo'>
                        <img src={logo} alt='' style={{ width: '65%' }} />
                    </div>
                </div>

                {/* Menu icon */}
                <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 bg-[#2678d1] rounded-t-sm rounded-b-sm text-center mx-auto absolute right-10 top-12 cursor-pointer lg:hidden '>
                    {
                        isOpen ? <FaXmark className='w-6 h-6 text-white' /> : <MdMenu className='w-6 h-6 text-white' />
                    }
                </div>

                {/* nav links here */}

                <ul className={`lg:flex pl-9 lg:pl-0 lg:items-center lg:pb-0 pb-15 absolute lg:static lg:z-auto z-[-1]
                left-0 transition-all bg-white duration-500 ease-in ${isOpen ? 'top-18 w-full py-3' : 'top-[-580px]'}`}>
                    {links.map(link => (
                        <li
                            key={link.name}
                            className={`font-semibold my-7 lg:my-0 lg:ml-8 lg:pt-[30px] ${isOpen ? 'my-1 bg-[#e5e5e959] py-2 px-1' : ''}`}
                            style={{ fontSize: '18px' }}
                            onClick={() => setIsOpen(false)}
                        >
                            <NavLink
                                to={link.link}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-[var(--primaryColor)] font-bold border-b-2 border-[#2678d1]'
                                        : 'hover:text-[var(--primaryColor)] text-[#2678d1]'
                                }
                                style={{ textDecoration: 'none' }}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>


            </div>
        </div >
    )
}

export default Header