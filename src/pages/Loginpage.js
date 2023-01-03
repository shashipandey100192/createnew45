import React from 'react';
import { Link } from 'react-router-dom';
import './globla.css';


function Loginpage() {
  return (
    <div className='login'>

    <div>
        <ul>
            <li>
            <input type="text" placeholder='username'/>
            </li>
            <li>
            <input type="password" placeholder='password'/>
            </li>
            <li>
          <Link to="dashboard"><button type='button'> submit</button></Link>
            </li>

        </ul>
        
        
    </div>


    </div>
  )
}

export default Loginpage