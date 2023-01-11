import React from 'react'
import { Link } from 'react-router-dom'
import '../global.css'

export default function Nav() {
    return (
        <>
            <nav>
                <div className="company">
                    <div className="logo">
                        <Link to="/"> <img src="/ducatLogo.png" alt="Error" className="logo-img" /></Link>
                    </div>
                </div>
                <ul className="nav">
                    <Link className='default-link' to="/home"><li className=""> Home </li></Link>
                    <Link className='default-link' to="/about"><li> About </li></Link>
                    <Link className='default-link' to="/contact"><li> Contacts </li></Link>
                </ul>
            </nav>
        </>
    )
}
