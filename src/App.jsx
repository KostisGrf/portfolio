import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Analytics } from "@vercel/analytics/next" 

const App = () => {
  return (
    <>
    <Analytics />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*"  element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App