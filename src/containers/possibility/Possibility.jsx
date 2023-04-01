import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibilities in OpenAI" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">There are Infinite Possibilities out there.</h1>
        <p>OpenAI has infinite possibilities to offer. With GPT-3, you can create anything you want. The possibilities are endless - from creating a new language to creating a new world.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility