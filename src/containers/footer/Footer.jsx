import React from 'react'
import gpt3logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Step in the Future before others do.</h1>
      </div>
      <div className="gpt3__footer-btn gpt3__hover-effect">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="Logo" />
          <p>3180 18th Street, San Francisco, CA <br /> All Rights Reserved.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <p>Links</p>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Blog</p>
        </div>
        <div className="gpt3__footer-links_div">
          <p>Company</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          <p>Jobs</p>
        </div>
        <div className="gpt3__footer-links_div">
          <p>Get in Touch</p>
          <p>3180 18th Street, San Francisco, CA</p>
          <p>+1 415-632-6136</p>
          <p>help@openai.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2023 OpenAI. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer