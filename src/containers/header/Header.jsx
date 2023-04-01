import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something Amazing with GPT-3 from OpenAI</h1>
        <p>Join us in shaping the future of technology. Sign up and get early access to GPT-3 and help us build the future of AI.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1600 requested to use GPT-3 in the last 24 hours.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header