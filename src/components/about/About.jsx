import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-parent container-fluid'>
        <div className="row about-row">
            <div className="col-lg-6 mr-5 img-main-div">
                <div className="img-div">
                    <img className='main-about-img' src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="" />
                    <img className='rotating-inner' src="https://stefantopalovicdev.vercel.app/static/media/working-emoji.c5325f52b5be329995a5.png" alt="" />
                    <span>
                        <img className='rotating-outer' src="https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt="" />
                    </span>
                </div>
            </div>
            <div className="col-lg-6 about-p">
                <h6>ABOUT ME</h6>
                <h5>A dedicated Front-end Developer
                    based in Belgrade, Serbia 📍</h5>
                <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </div>
    </div>
  )
}

export default About
