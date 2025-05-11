import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import BibleVersePopup from './BibleVersePopup'
import SplineIntro from './SplineIntro'

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true); // Show home section after delay or when animation is "done"
    }, 15000); // adjust timing based on your Spline animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BibleVersePopup />

      {/* Spline Section */}
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <SplineIntro />
      </div>

      {/* Home Section (only shows after Spline animation is "done") */}
      {showHome && (
        <div style={{ height: '100vh', scrollSnapAlign: 'start' }}>
          <Home />
        </div>
      )}
    </>
  )
}

export default App
