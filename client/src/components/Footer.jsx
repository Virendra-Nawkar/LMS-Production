import React from 'react'
import { Separator } from './ui/separator'
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLink } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



const Footer = () => {
    return (
        <div className=''>
            <Separator className=""></Separator>
            <div className="icons flex justify-center gap-4 pt-6">
                <a href="https://www.instagram.com/virendra_nawkar/" target='_blank' rel='noopener noreferrer'><FaInstagram className="w-6 h-8 cursor-pointer hover:text-blue-700" /></a>
                <a href="https://www.github.com/Virendra-Nawkar/" target='_blank' rel='noopener noreferrer'><FaGithub className="w-6 h-8 cursor-pointer hover:text-blue-700" /></a>
                <a href="https://www.linkedin.com/in/virendra-nawkar" target='_blank' rel='noopener noreferrer'><FaLinkedin className="w-6 h-8 cursor-pointer hover:text-blue-700" /></a>
                <a href="https://x.com/deals_for_us" target='_blank' rel='noopener noreferrer'><FaXTwitter className="w-6 h-8 cursor-pointer hover:text-blue-700" /></a>
                <a href="mailto:virendranawkar1@gmail.com" className="cursor-pointer"><IoIosMail className="w-6 h-8 cursor-pointer hover:text-blue-700" /></a>
                <a href="https://www.virpages.com" target='_blank' rel='noopener noreferrer'><FaLink className="w-6 h-8 cursor-pointer hover:text-blue-700" /></a>

            </div>
            <div className="text-center text-gray-500 text-sm m-4"> © {new Date().getFullYear()} VIRPAGES | All rights reserved.</div>
            {/* <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div> */}
        </div>
    )
}

export default Footer
