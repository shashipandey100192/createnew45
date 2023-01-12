import React from 'react';
import './common.css';
import Nav from './Nav';


function About() {
  return (
    <>
      <Nav />
      <div className="about">
        <h1>About Us</h1>
        <p>We are a company that specializes in producing high-quality products.</p>
        <p>We have been in business for over 10 years and have a team of experts with a lot of experience.</p>
      </div>
    </>
  );
}

export default About;
