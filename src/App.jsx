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
        <p className="nav-dropdown-link" onClick={handleNavState}>Menu</p>
        <ul className={"nav nav-primary " + (navState ? "open" : "")}>
          <li className={"nav-link"}>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>All Games</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active' : '')}>Upcoming</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<GamesList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/upcoming" element={<Upcoming />}></Route>
      </Routes>
    </Router>
  )
}

export default App
