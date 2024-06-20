// src/App.js
import React, { useState } from 'react';
import GitHubUser from './GithubUser';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('octocat');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Info</h1>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
        />
        <GitHubUser username={username} />
      </header>
    </div>
  );
};

export default App;
