import React from 'react'
import './Projects.css'

function Projects() {
    let screenWidth = window.innerWidth;

  return (
    <div className='projects-root' id='projects'>
      <div className="title">
        <h6>PROJECTS</h6>
        <h4>Each project is a unique piece of development 🧩</h4>
      </div>
      <div className="project-container conatiner-fluid">
        <div className="project-item row">
            <div className="project-img col-lg-7">
                <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/vitol-project.jpg'  :'/images/projects/small/vitol-project.jpg'} alt="" />
            </div>
            <div className="project-desc-right col-lg-5">
                <h3>Studio Management System </h3>
                <p>Built a Website for the efficient course production management. Some of the main features of the website are Role based Access Control - have 6 different types of users , slot booking system for recording sessions, Structured video approval and feedback workflow, Comprehensive analytics and reporting for tracking progress and engagement.</p>
                <div className='project-stack'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>NodeJS</p>
                    <p>ExpressJS</p>
                    <p>MongoDB</p>
                </div>
                <div className="links">
                    
                </div>
            </div>
        </div>

        <div className="project-item row alternative">
            <div className="project-desc-left col-lg-5">
                <h3>HOSTEL COMPLAINTS MANAGEMENT APP</h3>
                <p>This APP is used for managing hostel operations by providing students with a user-friendly platform to submit and track complaints, enabling effective communication and efficient maintenance services.</p>
                <div className='project-stack'>
                    <p>Flutter</p>
                    <p>Firebase</p>
                </div>
                <div className="links">
                    {/* <a href="https://github.com/joyalshine/vit_hostel_app" target="_blank" rel="noreferrer">Code<i className="fa-brands fa-github "></i></a> */}
                    <a href="https://www.figma.com/proto/EyzNbbQfexqqPobZbsLbjQ/VIT-HOSTEL-APP-FINAL?type=design&node-id=1-890&t=5WMk2GM8t5DgANo1-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A890&mode=design" target="_blank" rel="noreferrer">Figma<i className="fa-brands fa-figma"></i></a>
                </div>
            </div>
            <div className="project-img col-lg-7">
                <div id="carouselFade1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/hostel-project-1.jpg'  :'/images/projects/small/hostel-project-1.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/hostel-project-2.jpg'  :'/images/projects/small/hostel-project-2.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/hostel-project-4.jpg'  :'/images/projects/small/hostel-project-4.jpg'} className="d-block w-100" alt=""/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselFade1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="project-item row">
            <div className="project-img col-lg-7">
                <div id="carouselFade2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/netflix-project-1.jpg'  :'/images/projects/small/netflix-project-1.jpg'} className="img-fluid d-block" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/netflix-project-2.jpg'  :'/images/projects/small/netflix-project-2.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/netflix-project-3.jpg'  :'/images/projects/small/netflix-project-3.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/netflix-project-4.jpg'  :'/images/projects/small/netflix-project-4.jpg'} className="d-block w-100" alt=""/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselFade2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="project-desc-right col-lg-5">
                <h3>NETFLIX CLONE</h3>
                <p>Developed the Netflix Home page clone along with dynamic and new movie data using REST API.This project showcases my skills in front-end development</p>
                <div className='project-stack'>
                    <p>React</p>
                </div>
                <div className="links">
                    <a href="https://github.com/joyalshine/netflix" target="_blank" rel="noreferrer">Code<i className="fa-brands fa-github "></i></a>
                </div>
            </div>
        </div>

        <div className="project-item row alternative">
            <div className="project-desc-left col-lg-5">
                <h3>OLX CLONE</h3>
                <p>Discover the power of online classNameifieds with my OLX Clone project. Featuring a sleek design and efficient functionality, this project showcases my proficiency in Front-end and Back-end development.</p>
                <div className='project-stack'>
                    <p>React</p>
                    <p>NodeJS</p>
                    <p>ExpressJS</p>
                    <p>Firebase</p>
                </div>
                <div className="links">
                    <a href="https://github.com/joyalshine/olx_clone" target="_blank" rel="noreferrer">Code<i className="fa-brands fa-github "></i></a>
                </div>
            </div>
            <div className="project-img col-lg-7">
                <div id="carouselFade3" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/olx-project-1.jpg'  :'/images/projects/small/olx-project-1.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/olx-project-2.jpg'  :'/images/projects/small/olx-project-2.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/olx-project-3.jpg'  :'/images/projects/small/olx-project-3.jpg'} className="d-block w-100" alt=""/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade3" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselFade3" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="project-item row">
            <div className="project-img col-lg-7">
                <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/quiz-project.jpg'  :'/images/projects/small/quiz-project.jpg'} alt="" />
            </div>
            <div className="project-desc-right col-lg-5">
                <h3>QUIZ APP</h3>
                <p>This is just a basic Quiz app on flutter basics. It contains 10 questions and at the end of the test shows the result along with the selected and correct answers</p>
                <div className='project-stack'>
                    <p>Flutter</p>
                </div>
                <div className="links">
                    <a href="https://github.com/joyalshine/flutter-quiz-app" target="_blank" rel="noreferrer">Code<i className="fa-brands fa-github "></i></a>
                </div>
            </div>
        </div>

        <div className="project-item row alternative">
            <div className="project-desc-left col-lg-5">
                <h3>WHATSAPP CLONE</h3>
                <p>Cloned the main pages of Whatsapp app like the welcome page, login page, Home page, status page etc. This was developed during the learning phase of Flutter</p>
                <div className='project-stack'>
                    <p>Flutter</p>
                </div>
                <div className="links">
                    <a href="https://github.com/joyalshine/whatsapp_ui" target="_blank" rel="noreferrer">Code<i className="fa-brands fa-github "></i></a>
                </div>
            </div>
            <div className="project-img col-lg-7">
                <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/whatsapp-project.jpg'  :'/images/projects/small/whatsapp-project.jpg'} alt="" />
            </div>
        </div>

        <div className="project-item row">
            <div className="project-img col-lg-7">
                <div id="carouselFade4" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/signs-project-1.jpg'  :'/images/projects/small/signs-project-1.jpg'} className="d-block w-100" alt=""/>
                        </div>
                        <div className="carousel-item">
                            <img src={process.env.PUBLIC_URL + screenWidth > 1400 ?'/images/projects/large/signs-project-2.jpg'  :'/images/projects/small/signs-project-2.jpg'} className="d-block w-100" alt=""/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade4" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselFade4" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="project-desc-right col-lg-5">
                <h3>SIGNS WEBSITE</h3>
                <p>This is the website developed for a Hackathon. This is the Implementation of the Business idea we presesnted during the Hackathon. It has a intuitive front-end and a well structured Backend</p>
                <div className='project-stack'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>NodeJS</p>
                    <p>ExpressJS</p>
                    <p>MongoDB</p>
                </div>
                <div className="links">
                    <a href="https://github.com/joyalshine/vinhack" target="_blank" rel="noreferrer">Code<i className="fa-brands fa-github "></i></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
