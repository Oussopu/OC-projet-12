import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import '../assets/styles/header.scss'

function Header() {
  const headerLinks = [
    {
      text: 'Accueil',
    },
    {
      text: 'Profil',
    },
    {
      text: 'Réglages',
    },
    {
      text: 'Communauté',
    },
  ]

  return (
    <header className="App-header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo du site" />
        </Link>
        {headerLinks.map((link, index) => (
          <Link key={index}>{link.text}</Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
