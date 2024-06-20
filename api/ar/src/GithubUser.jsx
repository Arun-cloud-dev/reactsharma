// src/GitHubUser.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/Arun-cloud-dev`);
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user: {error.message}</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
    </div>
  );
};

export default GitHubUser;
