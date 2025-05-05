import React from 'react'
import '../assets/styles/macronutrient.scss'
import '../assets/media-styles/media-macronutrient.scss'

function Macronutrient({ score, title, imageSrc, backgroundColor }) {
  return (
    <div className="macronutrient-content">
      <div className="macronutrient-image" style={{ backgroundColor }}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className="macronutrient-info">
        <div className="macronutrient-score">
          <h2>{score}</h2>
        </div>
        <div className="macronutrient-title">
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Macronutrient
