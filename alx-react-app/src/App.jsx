import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Existing component
import WelcomeMessage from './components/WelcomeMessage'

// Previous components
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

// New component
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Logos section */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Vite + React heading */}
      <h1>Vite + React</h1>

      {/* Your existing WelcomeMessage component */}
      <WelcomeMessage />

      {/* Previous components */}
      <Header />
      <MainContent />
      <Footer />

      {/* New UserProfile components */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys cooking and travel" />
      <UserProfile name="Charlie" age="28" bio="Fan of books and movies" />

      {/* Counter card */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
