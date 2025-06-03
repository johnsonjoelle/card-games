import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import GamesList from './Components/GamesList';
import About from './Components/About';
import Upcoming from './Components/Upcoming';
import Blackjack from './Components/Blackjack';
import './App.css'
import logo from './assets/card-logo.png';

function App() {
  const [navState, setNavState] = useState(false);

  const handleNavState = () => {
    setNavState(!navState);
  }

  return (
    <Router>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
          <p>CardGames</p>
        </div>
        <button 
          className="nav-dropdown-link" 
          onClick={handleNavState}
          aria-label="Toggle navigation menu"
          aria-expanded={navState}
        >
          {(navState ? "X" : "Menu")}
        </button>
        <ul className={"nav nav-primary " + (navState ? "open" : "")}>
          <li className={"nav-link"} onClick={handleNavState}>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>All Games</NavLink>
          </li>
          <li className="nav-link" onClick={handleNavState}>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
          <li className="nav-link" onClick={handleNavState}>
            <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active' : '')}>Upcoming</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<GamesList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
        <Route path="/blackjack" element={<Blackjack />}></Route>
      </Routes>
    </Router>
  )
}

export default App
