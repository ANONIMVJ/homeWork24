import React, { Suspense } from 'react'
import MainLayout from './layout/MainLayout'
import { Route, Routes } from 'react-router'

import StatisticsPage from './pages/Statistics'
import AnnouncementsPage from './pages/Announcements'
import LoginPage from './pages/Login'
import Auth from './utils/Auth'

function App() {
  return (
    <div>
       <Suspense fallback={<h1>Page is loading</h1>}>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path='/dashboard' element={
            <Auth>
              <MainLayout />
            </Auth>
          }>
            <Route path='statistics' element={<StatisticsPage />} />
            <Route path='announcements' element={<AnnouncementsPage />} />
          </Route>
        </Routes>
       </Suspense>
    </div>
  )
}

export default App
