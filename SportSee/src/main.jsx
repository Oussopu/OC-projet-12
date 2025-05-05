import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Profile from './pages/Profile.jsx'
import Sidebar from './components/Sidebar.jsx'
import { DataProvider } from './services/dataContext.jsx'
import './assets/styles/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <Router>
        <div className="main-container">
          <Header />
          <div className="content-container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DataProvider>
  </StrictMode>
)
