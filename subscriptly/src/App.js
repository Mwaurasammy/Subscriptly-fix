import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Navbar user={user}/>
      {!user && <h1>Welcome to Subscriptly!</h1>}
      <Routes>
        <Route path='/' element={<HomePage user={user}/>} />
        <Route path="/home" element={<HomePage user={user}/>} />
        <Route path="/login" element={<AuthPage setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;