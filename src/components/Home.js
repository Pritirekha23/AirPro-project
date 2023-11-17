// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
      <Link to="/menu">Go to Home Page</Link> 
    </div>
  );
};

export default Home;
