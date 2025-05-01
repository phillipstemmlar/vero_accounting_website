import React from 'react'
import img from '../assets/images/Web-developer.svg'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
            <div id="about">
                <div className="m-10">
                    <h2 className="my-2 text-center text-3xl fg-primary uppercase font-bold">About Us</h2>
                    <div className="d-flex flex-row mt-10 justify-content-around">
                        <div className="flex-2 d-flex justify-content-end align-items-start">
                            <img alt="card img" className="rounded-t circle" src={img} />
                        </div>
                        <div className="flex-3 fg-primary p-10">
                            <div className="pb-5">
                                <div className="font-bold text-2xl">Irene Schulze</div>
                                <div className="font-semibold text-l">BCom, NWU | Professional Accountant (SA)</div>
                            </div>
                            <p className="pb-5">
                                Irene founded Vero in 2025 with a vision to bring honesty, clarity, and trusted
                                financial advice to clients across industries. She earned her BCom degree from
                                North-West University in 2017 and became a registered Professional Accountant (SA) in
                                2021.
                            </p>
                            <p className="pb-5">
                                With a strong foundation in accounting and a passion for building long- term client
                                relationships, Irene is committed to growing the firm and staying actively involved in
                                the profession for decades to come. Did You Know? The name Vero is inspired by the Latin
                                word “verus”, meaning true. It reflects our core belief: that honesty, clarity, and
                                trusted advice should be at the heart of every client relationship. At Vero, we don’t
                                just deliver services — we handle the numbers, so you can focus on what matters most.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="fg-primary d-flex justify-content-center mb-10">
                    <div>
                        <div className="pb-5">
                            <div className="font-bold text-2xl">Did You Know?</div>
                        </div>
                        <p className="pb-5">The name Vero is inspired by the Latin word “verus”, meaning true.</p>
                        <p className="pb-5">
                            It reflects our core belief: that honesty, clarity, and trusted advice should be at the
                            heart of every client relationship.
                        </p>
                        <p className="pb-5">
                            At Vero, we don’t just deliver services — we handle the numbers, so you can focus on what
                            matters most.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
    // return (
    //     <>
    //         <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
    //             <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
    //                 <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
    //                     <img alt="card img" className="rounded-t float-right" src={img} />
    //                 </div>
    //                 <div
    //                     className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
    //                     data-aos="zoom-in"
    //                     data-aos-delay="500"
    //                 >
    //                     <h3 className="text-3xl  fg-primary font-bold">
    //                         We develop high quality bespoke web and mobile applications for organizations, institutions
    //                         and SMEs
    //                     </h3>
    //                     <div>
    //                         <p className="my-3 text-xl text-gray-600 font-semibold">
    //                             Our team is well vast in software development and is ready to help develop the
    //                             applications of your choice.
    //                         </p>
    //                     </div>

    //                     <div>
    //                         <p className="my-3 text-xl text-gray-600 font-semibold">
    //                             We take responsibility for building custom software solutions that caters for automation
    //                             of your business processes and improve efficiency.
    //                         </p>
    //                     </div>
    //                     <Link
    //                         to="/contact"
    //                         className="text-white bg-primary hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
    //                     >
    //                         Contact us
    //                         <svg
    //                             className="w-4 h-4 ml-1 group-hover: translate-x-2"
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             viewBox="0 0 20 20"
    //                             fill="currentColor"
    //                         >
    //                             <path
    //                                 fillRule="evenodd"
    //                                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //                                 clipRule="evenodd"
    //                             ></path>
    //                         </svg>
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}

export default AboutUs
