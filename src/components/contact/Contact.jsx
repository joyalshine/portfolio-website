import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact-root' id='contact'>
        <h6 className='contact-title'>CONTACT</h6>
        <h5>Don't be shy! Hit me up! 👇</h5>
        <div className='contact-inner-div'>
            <div className="sub-div">
                <span>
                    <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className='sub-sub'>
                    <h6>Location</h6>
                    <p>Kochi, Kerala</p>
                </div>
            </div>
            <div className="sub-div">
                <span>
                    <i className="fa-solid fa-map-location-dot"></i>
                </span>
                <div className='sub-sub'>
                    <h6>Mail</h6>
                    <p>joyalshine2003@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
