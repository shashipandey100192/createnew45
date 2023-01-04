import { Link } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <div>
        <ul className='mynav'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/service">Serivce</Link></li>
            <li><Link to="/other">Other</Link></li>
        </ul>
        


    </div>
  )
}

export default Home