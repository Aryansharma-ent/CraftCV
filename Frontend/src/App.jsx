import React from "react"
import { Routes, Route } from 'react-router'
import Builder from "./Pages/Builder"
import LandingPage from "./Pages/LandingPage"
import Templates from "./Pages/Templates"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/templates" element={<Templates />} />
    </Routes>
  )
}

export default App
