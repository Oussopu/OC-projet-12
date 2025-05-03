import '../assets/styles/profil.scss'
import React from 'react';
import Macronutrient from "../components/Macronutrient.jsx";
import BarChartComponent from "../components/BarChartComponent.jsx";
import AreaChartComponent from "../components/AreaChartComponent.jsx";
import RadarChartComponent from "../components/RadarChartComponent.jsx";
import PieChartComponent from "../components/PieChartComponent.jsx";
import kcalImage from '../assets/images/kcal.svg';
import protImage from '../assets/images/prot.svg';
import carbImage from '../assets/images/carb.svg';
import fatImage from '../assets/images/fat.svg';

function Profile() {
    return (
        <div className='profil-main'>
            <div className='title-main'>
                <h1>Bonjour <span>Thomas</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='results-container'>
                <div className='graphs-container'>
                    <div className='weight-container'>
                        <BarChartComponent />
                    </div>
                    <div className='info-container'>
                        <div className='objectives-container'>
                            <AreaChartComponent />
                        </div>
                        <div className='intensity-container'>
                            <RadarChartComponent />
                        </div>
                        <div className='score-container'>
                            <PieChartComponent />
                        </div>
                    </div>
                </div>
                <div className='macronutrients-container'>
                    <Macronutrient score="1,990kCal" title="Calories" imageSrc={kcalImage} backgroundColor="rgba(255, 0, 0, 0.1)"/>
                    <Macronutrient score="155g" title="Protéines" imageSrc={protImage} backgroundColor="rgba(74,184,255, 0.1)"/>
                    <Macronutrient score="290g" title="Glucides" imageSrc={carbImage} backgroundColor="rgba(249,206,35, 0.1)"/>
                    <Macronutrient score="50g" title="Lipides" imageSrc={fatImage} backgroundColor="rgba(253,81,129, 0.1)"/>
                </div>
            </div>
        </div>
    )
}

export default Profile;
