import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import BibleVersePopup from './BibleVersePopup'
import { Routes, Route } from 'react-router-dom';
import SplineIntro from './SplineIntro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BibleVersePopup />
    <SplineIntro />
   <Home />
    </>
  )
}

export default App
