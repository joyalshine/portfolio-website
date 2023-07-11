import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className='projects-root'>
      <div className="title">
        <h6>PROJECTS</h6>
        <h4>Each project is a unique piece of development 🧩</h4>
      </div>
      <div className="project-container conatiner-fluid">
        <div className="project-item row">
            <div className="project-img col-lg-7">
                <img src={process.env.PUBLIC_URL + '/images/sample.png'} alt="" />
            </div>
            <div className="project-desc-right col-lg-5">
                <h3>CAR RENTAL 🚗</h3>
                <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                <div className='project-stack'>
                    <p>React</p>
                    <p>SCSS</p>
                </div>
                <div className="links">
                    <a href="">Code<i class="fa-brands fa-github "></i></a>
                    <a href="">Live Demo</a>
                </div>
            </div>
        </div>

        <div className="project-item row">
        <div className="project-desc-left col-lg-5">
                <h3>CAR RENTAL 🚗</h3>
                <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                <div className='project-stack'>
                    <p>React</p>
                    <p>SCSS</p>
                </div>
                <div className="links">
                    <a href="">Code<i class="fa-brands fa-github "></i></a>
                    <a href="">Live Demo</a>
                </div>
            </div>
            <div className="project-img col-lg-7">
                <img src={process.env.PUBLIC_URL + '/images/sample.png'} alt="" />
            </div>
        </div>

        <div className="project-item row">
            <div className="project-img col-lg-7">
                <img src={process.env.PUBLIC_URL + '/images/sample.png'} alt="" />
            </div>
            <div className="project-desc-right col-lg-5">
                <h3>CAR RENTAL 🚗</h3>
                <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                <div className='project-stack'>
                    <p>React</p>
                    <p>SCSS</p>
                </div>
                <div className="links">
                    <a href="">Code<i class="fa-brands fa-github "></i></a>
                    <a href="">Live Demo</a>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
