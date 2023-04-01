import React from 'react'
import './feature.css'

const Feature = ({ title, text, showBorder='true', showAnim='true' }) => {
  let addstyles = {}
  if(showBorder==='true') {
    addstyles = {
      'border': '2px solid #fff',
      'padding': '20px',
    }
  }
  let showAnimB = false
  if(showAnim==='true') { showAnimB = true }
  let classes = `gpt3__features-container__feature ${showAnimB ? "gpt3__hover-effect" : ""}`
  return (
    <div className={classes} style={addstyles}>
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature