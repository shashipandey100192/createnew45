import React from 'react'
import "./login.css"
import Nav from './Nav'

export default function Login() {
    return (
        <>
            <Nav />
            <form action='/home'>
                <div className="container">
                    <h2 className="login-title">Login to your Account</h2>
                    <input type="text" placeholder="Enter username" id="uname" required />
                    <input type="text" placeholder="Enter password" id="pass" required />
                    <button type='submit' className='btn'>Login</button>
                </div>
            </form>
        </>
    )
}
