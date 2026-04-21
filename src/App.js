import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import MyTeams from './pages/MyTeams' ;
import NFL from './pages/NFL' ;
import NBA from './pages/NBA' ;
import MLB from './pages/MLB' ;
import NHL from './pages/NHL' ;
import './App.css' ;

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="app-title">My<span>Sports</span>Teams</h1>
        <nav className="tab-bar">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'tab active' : 'tab'}>⭐ My Teams </NavLink>
          <NavLink to="/nfl" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>🏈 NFL </NavLink>
          <NavLink to="/nba" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>🏀 NBA </NavLink>
          <NavLink to="/mlb" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>⚾ MLB </NavLink>
          <NavLink to="/nhl" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>🏒 NHL </NavLink>
        </nav>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<MyTeams />} />
            <Route path="/nfl" element={<NFL />} />
            <Route path="/nba" element={<NBA />} />
            <Route path="/mlb" element={<MLB />} />
            <Route path="/nhl" element={<NHL />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;