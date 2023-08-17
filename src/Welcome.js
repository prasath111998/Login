// Welcome.js
import React from 'react';

const Welcome = ({ username }) => {
  return (
    <div className="welcome-container">
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default Welcome;
