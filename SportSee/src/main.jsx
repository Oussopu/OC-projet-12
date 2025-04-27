import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header.jsx'
import Profil from './pages/Profil.jsx'
import './assets/styles/main.scss'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Profil />} />
            </Routes>
        </Router>
    </StrictMode>
)
