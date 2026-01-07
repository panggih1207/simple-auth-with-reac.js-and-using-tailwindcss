import { Router } from 'express'
import React from 'react'
import HomePage from './page/dashboard/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  )
}

export default App
