import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import '../assets/styles/header.scss'

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <Link>
          <img src={logo} alt="Logo du site" />
        </Link>
        <Link>Accueil</Link>
        <Link>Profil</Link>
        <Link>Réglages</Link>
        <Link>Communauté</Link>
      </nav>
    </header>
  )
}

export default Header
