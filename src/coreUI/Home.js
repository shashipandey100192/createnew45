import React from "react";
import './global.css';

function MycoreHomee()
{

    return(
        <> 
        <nav>
            <div className="company">
                <div className="logo">
                    <img src="/css3Logo.png" alt="Error" className="logo-img" />
                </div>
                <div className="company-name">
                    <span>Company</span>
                </div>
            </div>
            <ul className="nav">
                <li className="active">Home</li>
                <li>Services</li>
                <li>Contacts</li>
                <li>Documentation</li>
                <li>About</li>
            </ul>
        </nav>
        </>
        
    )
}
export default MycoreHomee;