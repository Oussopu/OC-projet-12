import React from 'react'
import '../assets/styles/macronutrient.scss'
import image from '../assets/images/kcal.svg'


function Macronutrient() {
    return (
        <div className='macronutrient-content'>
            <div className='macronutrient-image'>
                <img src={image} alt=""/>
            </div>
            <div className='macronutrient-info'>
                <div className='macronutriment-score'>
                    <h2>1,990</h2>
                </div>
                <div className='macronutriment-title'>
                    <p>calories</p>
                </div>
            </div>
        </div>
    )
}

export default Macronutrient
