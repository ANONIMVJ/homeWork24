import React from 'react'
import MainLayout from './layout/MainLayout'
import { Route, Routes } from 'react-router'

import StatisticsPage from './pages/Statistics'
import AnnouncementsPage from './pages/Announcements'
import LoginPage from './pages/Login'
import Auth from './utils/Auth'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={
          <Auth>
            <MainLayout />
          </Auth>
        }>
          <Route path='statistics' element={<StatisticsPage />} />
          <Route path='announcements' element={<AnnouncementsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
