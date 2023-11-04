import React from 'react'
import { AiTwotonePhone } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { BiCopyright } from 'react-icons/bi'
import { BsInstagram, BsWhatsapp, BsPinterest } from 'react-icons/bs'
import { RiTwitterXLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <div className='px-2 w-full bg-navbar-color py-5 rounded-t-2xl shadow-xl'>
            <div className='space-y-2 flex flex-row justify-between items-center'>
                <div>
                    <a href="tel:+919894233070" className='flex items-center gap-2 w-24'>
                        <span>
                            <AiTwotonePhone />
                        </span>
                        <p className='font-serif'>Call us</p>
                    </a>
                    <a href="mailto:kanishq.2001106@srec.ac.in" className='flex items-center gap-2 w-24'>
                        <span>
                            <CgMail />
                        </span>
                        <p className='font-serif'>Mail here</p>
                    </a>
                </div>
                <div className='flex flex-row gap-4'>
                    <span><BsWhatsapp /></span>
                    <span><BsInstagram /></span>
                    <span><RiTwitterXLine /></span>
                    <span><BsPinterest /></span>
                </div>
            </div>
            <div className='bg-black h-0.5'>
                <hr />
            </div>
            <div className='pt-4 flex items-center'>
                <div>
                    <BiCopyright />
                </div>
                <p><span className='font-bold font-mono italic text-sm'>ARUNKUMAR</span> - No Rights Reserved and Designed by <span className='font-bold italic'>MK Groups</span></p>
            </div>
        </div>
    )
}

export default Footer