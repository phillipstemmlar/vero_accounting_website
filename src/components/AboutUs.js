import React from 'react'
import img from '../assets/images/Vero/Irene-Square.jpg'

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
}

export default AboutUs
