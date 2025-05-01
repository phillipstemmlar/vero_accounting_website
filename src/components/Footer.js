import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import SVG from './svg/SVG'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-primary p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <h3 className="font-bold text-4xl mb-4">Vero</h3>
                                <div className="text-md font-medium text-gray-600">
                                    <h5>26 Pointer Crescent</h5>
                                    <p>Garsfontein</p>
                                    <p>Pretoria</p>
                                    <p>South Africa</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="fg-primary text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink
                                        to="/#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Home
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        About
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Services
                                    </HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Contact
                                    </HashLink>
                                </li>
                            </ul>
                        </div>

                        {/* 3rd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                            <h6 className="fg-primary text-xl font-bold mb-4">OUR SERVICES</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <Link
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Accounting & Bookkeeping
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Tax & Statutory Compliance
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Payroll Administration
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Financial Statements Compilation
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Business Management & Advisory
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="#"
                                        className="fg-primary hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                                    >
                                        Secretarial Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase fg-primary">
                            <div className="text-xl mb-6">Social Media Links.</div>

                            <div className="text-md font-medium mb-6">Follow us on social media.</div>
                            <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li className="mr-5">
                                        <a
                                            href="https://www.linkedin.com/"
                                            target="_blank"
                                            className="flex justify-center items-center fg-primary hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-50 ease-in-out"
                                            aria-label="LinkedIn"
                                        >
                                            {SVG.linkedIn}
                                        </a>
                                    </li>
                                    <li className="mr-5">
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-center items-center fg-primary hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-50 ease-in-out"
                                            aria-label="Facebook"
                                        >
                                            {SVG.facebook}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            className="flex justify-center items-center fg-primary hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-50 ease-in-out"
                                            aria-label="Instagram"
                                        >
                                            {SVG.instagram}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                            <div className="text-sm text-gray-200 font-semibold py-1">
                                Copyright &copy; {new Date().getFullYear()}
                                {'  '}
                                <HashLink to="#" className=" hover:text-gray-900">
                                    Vero Accounting and Advisory
                                </HashLink>
                                . All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
