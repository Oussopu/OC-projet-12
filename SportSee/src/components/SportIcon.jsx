import React from 'react'
import '../assets/styles/sport-icon.scss'

function SportIcon({ src, alt }) {
  return (
    <div className="sport-icon">
      <img src={src} alt={alt} />
    </div>
  )
}

export default SportIcon
