import '../assets/styles/profil.scss'
import '../assets/media-styles/media-profil.scss'
import React, { useContext } from 'react'
import { DataContext } from '../services/dataContext.jsx'
import Macronutrient from '../components/Macronutrient.jsx'
import BarChartComponent from '../components/BarChartComponent.jsx'
import AreaChartComponent from '../components/AreaChartComponent.jsx'
import RadarChartComponent from '../components/RadarChartComponent.jsx'
import PieChartComponent from '../components/PieChartComponent.jsx'
import kcalImage from '../assets/images/kcal.svg'
import protImage from '../assets/images/prot.svg'
import carbImage from '../assets/images/carb.svg'
import fatImage from '../assets/images/fat.svg'

function Profile() {
  const { userData, error } = useContext(DataContext)

  if (error) {
    return (
      <div className="error-message">
        <a>Erreur : Impossible de récupérer les données</a>
      </div>
    )
  }

  if (!userData || !userData.keyData) {
    return <div></div>
  }

  const macronutrientIcons = [
    {
      score: `${userData.keyData.calorieCount}kCal`,
      title: 'Calories',
      imageSrc: kcalImage,
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
    {
      score: `${userData.keyData.proteinCount}g`,
      title: 'Protéines',
      imageSrc: protImage,
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
    },
    {
      score: `${userData.keyData.carbohydrateCount}g`,
      title: 'Glucides',
      imageSrc: carbImage,
      backgroundColor: 'rgba(249,206,35, 0.1)',
    },
    {
      score: `${userData.keyData.lipidCount}g`,
      title: 'Lipides',
      imageSrc: fatImage,
      backgroundColor: 'rgba(253,81,129, 0.1)',
    },
  ]

  return (
    <div className="profil-main">
      <div className="title-main">
        <h1>
          Bonjour <span>{userData?.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="results-container">
        <div className="graphs-container">
          <div className="weight-container">
            <BarChartComponent />
          </div>
          <div className="info-container">
            <div className="objectives-container">
              <AreaChartComponent />
            </div>
            <div className="intensity-container">
              <RadarChartComponent />
            </div>
            <div className="score-container">
              <PieChartComponent />
            </div>
          </div>
        </div>
        <div className="macronutrients-container">
          {macronutrientIcons.map((icon, index) => (
            <Macronutrient
              key={index}
              score={icon.score}
              title={icon.title}
              imageSrc={icon.imageSrc}
              backgroundColor={icon.backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
