import React from 'react';
import './common.css';
import Nav from './Nav';

function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <h1>Welcome to the Homepage</h1>
        <p>This is the main page of our website.</p>
        <p>You can find information about our products and services here.</p>
      </div>
    </>
  );
}

export default Home;