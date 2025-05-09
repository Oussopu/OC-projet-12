import React from 'react'
import '../assets/styles/sidebar.scss'
import SportIcon from './SportIcon.jsx'
import yogaIcon from '../assets/images/yoga.svg'
import swimIcon from '../assets/images/swiming.svg'
import bikeIcon from '../assets/images/cycling.svg'
import muscleIcon from '../assets/images/bodybuilding.svg'

const sportIcons = [
  {
    src: yogaIcon,
    alt: 'Yoga',
  },
  {
    src: swimIcon,
    alt: 'Natation',
  },
  {
    src: bikeIcon,
    alt: 'Vélo',
  },
  {
    src: muscleIcon,
    alt: 'Musculation',
  },
]

function Sidebar() {
  return (
    <div className="App-sidebar">
      <div className="sport-icons">
        {sportIcons.map((icon, index) => (
          <SportIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </div>
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  )
}

export default Sidebar
