import React, { useState } from 'react';

//images
import logo1 from '../../assets/Logo1.svg'
import brandTag from '../../assets/Nisha stores.svg'
import { FiMenu } from 'react-icons/fi';
import { BsMenuDown, BsMenuUp } from 'react-icons/bs';

import './Navcss.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const MobileView = () => {

        const [navbarMenu, setNavbarMenu] = useState(false);

        const setTheNavbarMenu = () => {
            setNavbarMenu(!navbarMenu);
        }

        const navigate = useNavigate();
        const handleOnClick = () => {
            navigate(`/`);
        }

        const handleAboutUs = () => {
            navigate(`/aboutUs`);
        }

        return (
            <div className='md:hidden bg-navbar-color fixed w-full rounded-b-xl shadow-xl z-10'>
                <div className='p-4 flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='w-16'>
                            <img src={logo1} className='h-full w-full' onClick={handleOnClick} />
                        </div>
                        <div>
                            <img src={brandTag} className='w-40 sm:w-60' />
                        </div>
                    </div>
                    <div className='hover:cursor-move'>
                        {!navbarMenu &&
                            <BsMenuUp className='w-10 h-8' onClick={setTheNavbarMenu} />
                        }
                        {navbarMenu &&
                            < BsMenuDown className='w-10 h-8' onClick={setTheNavbarMenu} />
                        }
                    </div>
                    {/*  */}
                </div>
                {navbarMenu && <div className='absolute bg-menubar-color right-0 mx-2 my-0.5 px-5 py-2 rounded-b-lg z-96 '>
                    <div className='flex flex-col gap-3 font-bold '>
                        <button onClick={handleOnClick}>Home</button>
                        <button>Service</button>
                        <button onClick={handleAboutUs} >About Us</button>
                        <a href="mailto:kanishq.2001106@srec.ac.in">Contact</a>
                    </div>
                </div>}
            </div>
        )
    }

    const LapView = () => {

        const buttonStyle = `hover:text-color1 hover:text-xl hover:transistion-all duration-500`;
        const logoStyle = `w-full h-full hover:w-20 transistion-all duration-1000`;

        const navigate = useNavigate();
        const handleOnClick = () => {
            navigate(`/`);
        }

        const handleAboutUs = () => {
            navigate(`/aboutUs`);
        }

        return (
            <div className='hidden md:block bg-navbar-color fixed w-full rounded-b-xl shadow-xl z-10'>
                <div className='p-4 flex flex-row items-center justify-between pe-10'>
                    <div className='flex flex-row items-center gap-10'>
                        <div className='w-24'>
                            <img src={logo1} className={logoStyle} onClick={handleOnClick} />
                        </div>
                        <div className='flex flex-row gap-5 text-2xl font-bold'>
                            <button className={buttonStyle} onClick={handleOnClick}>Home</button>
                            <a href="mailto:kanishq.2001106@srec.ac.in" className={buttonStyle}>Contact</a>
                            <button className={buttonStyle}>Service</button>
                            <button className={buttonStyle} onClick={handleAboutUs}>About Us</button>
                        </div>
                    </div>
                    <div>
                        <img src={brandTag} className='md:w-40 lg:w-80'/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <MobileView />
            <LapView />
        </>

    )
}

export default Navbar