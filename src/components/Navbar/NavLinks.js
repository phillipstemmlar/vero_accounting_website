import React from 'react'
import { HashLink } from 'react-router-hash-link'

const NavLinks = () => {
    return (
        <div>
            <HashLink className="px-4 font-extrabold text-gray-500 fg-primary-hover" smooth to="/#">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 fg-primary-hover" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 fg-primary-hover" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 fg-primary-hover" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 fg-primary-hover" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink
                className="text-white bg-primary bg-primary-hover-80 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                smooth
                to="/get-demo#demo"
            >
                Demo our products
            </HashLink>
        </div>
    )
}

export default NavLinks
