import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-parent container-fluid' id="skills">
        <div className='child'>
            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>Front-End</h5>
                    </div>
                </div>
                <div className="col-12 col-md-9 stack-items row">
                    <div className="col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/html.png'} alt="" />
                        </div>
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/css.png'} alt="" />
                        </div>
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/javascript.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/react.png'} alt="" />
                        </div>
                        <div className="stack-item ">
                            <img src={process.env.PUBLIC_URL + '/icons/html.png'} alt="" />
                        </div>
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/bootstrap.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>Back-End</h5>
                    </div>
                </div>
                <div className="col-md-9 stack-items row">
                    <div className="col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/nodejs.png'} alt="" />
                        </div>
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/express.png'} alt="" />
                        </div>
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/mongodb.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 stack-items-innerDiv">
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/firebase.png'} alt="" />
                        </div>
                        <div className="stack-item">
                            <img src={process.env.PUBLIC_URL + '/icons/mysql.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>App</h5>
                    </div>
                </div>
                <div className="col-md-9 stack-items">
                    <div className="stack-item">
                        <img src={process.env.PUBLIC_URL + '/icons/flutter.png'} alt="" />
                    </div>
                </div>
            </div>

            <div className="skill-set row m-1">
                <div className="col-md-3 stack-title">
                    <div className="">
                        <h5>Other Skills</h5>
                    </div>
                </div>
                <div className="col-md-9 stack-items">
                    <div className="stack-item">
                        <img src={process.env.PUBLIC_URL + '/icons/figma.png'} alt="" />
                    </div>
                    <div className="stack-item">
                        <img src={process.env.PUBLIC_URL + '/icons/git.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
