import React, { useEffect, useRef } from 'react'
import '../styles/sections/hero-section.scss'
import gsap, { Power3 } from 'gsap'
import { Tween } from 'gsap/gsap-core'

function HeroSection() {

    let img = useRef(null)
    let txt = useRef(null)

    let tl = gsap.timeline();


    useEffect(() => {
        // tl.from(img,
        //     {
        //         duration: .7,
        //         opacity: 1,
        //         y: 100,
        //     })
        //     .set(txt, { duration: .7, opacity: 1, y: 100, })

        tl.from(".hero-left-col", { duration: .5, x: 500, y: 0, opacity: 1 })
            .to(".hero-right-col", { duration: .5, x: 50, y: 0, opacity: 1 })
    }, [tl])


    return (
        <div className="hero-section">

            <div className="container">

                <div ref={el => txt = el} className="hero-left-col">

                    <p>hello, welcome to my world I'M</p>

                    <h1>john bassey</h1>

                    <blockquote> Infusing the digital canvas with passion, I, a dedicated React developer, sculpt seamless experiences. Driven by code, defined by purpose, I am your visionary solution in the world of React. "Together we can make magic happen"
                    </blockquote>

                    <button>download CV</button>
                    <button>Get In touch</button>
                </div>


                <div ref={el => img = el} className="hero-right-col">
                </div>

            </div>

        </div>
    )
}

export default HeroSection

