import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './globla.css';


function Loginpage() {

const [user,setuser]=useState('name');
const abc =(e)=>{
  setuser(e.target.value);
  console.log(user);
  localStorage.setItem('username',user);
  sessionStorage.setItem('clientname',user);

}

  return (
    <div className='login'>

    <div>
        <ul>
            <li>
            <input type="text" value={user} placeholder='username' onInput={abc}/>
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