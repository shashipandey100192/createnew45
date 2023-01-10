
import React from 'react';
import { Link, Outlet } from 'react-router-dom';



function Home() {
  return (
    <div>
        <ul className='mynav'>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="service">Serivce</Link></li>
            <li><Link to="other">Other</Link></li>
          <Outlet/>
        </ul>
    

    </div>
  )
}

export default Home