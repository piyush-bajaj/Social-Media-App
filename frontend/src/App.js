import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './container/Home'
import LoginContainer from './container/LoginContainer'

function App() {
  return (
    <Routes>
        <Route path='login' element={<LoginContainer />} />
        <Route path='/*' element={<Home />} />
    </Routes>
  )
}

export default App