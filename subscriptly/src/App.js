import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user data exists in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser).name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        {/* Redirect to the landing page by default */}
        <Route path="/" element={<Navigate to="/landing" />} />

        <Route path="/landing" element={<LandingPage user={user} />} />
        <Route path="/home" element={<HomePage user={user} />} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
