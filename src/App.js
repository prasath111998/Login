// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, RouteProps } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling
import Login from './LoginPage';
import Welcome from './Welcome';
import { useNavigate } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (email) => {
    // Extract username from email (example)
    const extractedUsername = email.split('@')[0];
    setUsername(extractedUsername);
    setLoggedIn(true);
    navigate('/welcome');
  };

  return (
    
      <div className="app">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/welcome"
            element={loggedIn ? <Welcome username={username} /> : <Login onLogin={handleLogin} />}
          />
        </Routes>
      </div>
  
  );
}

export default App;
