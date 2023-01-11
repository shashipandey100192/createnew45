import React from 'react'
import "./login.css"
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <Nav />
            <main>
                <div className="container">
                    <h2 className="login-title">Login to your Account</h2>
                    <input type="text" placeholder="Enter username" id="uname" required />
                    <input type="text" placeholder="Enter password" id="pass" required />
                    <Link to="/home"><button className='btn'>Login</button></Link>
                </div>
            </main>
        </>
    )
}
