import React from 'react';
import './common.css';
import Nav from './Nav';

function Contact() {
  return (
    <>
      <Nav />
      <div className="contact">
        <h1>Contact Us</h1>
        <p>You can reach us by phone at 555-555-5555.</p>
        <p>You can also send us an email at info@example.com.</p>
        <p>Our address is 1234 Example St, Anytown USA 12345</p>
      </div>
    </>
  );
}

export default Contact;