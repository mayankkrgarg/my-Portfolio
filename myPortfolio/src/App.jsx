import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Homepage from './Components/Homepage'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
