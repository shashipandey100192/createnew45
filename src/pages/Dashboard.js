import React, { useState } from 'react'
import { About, Mychild } from './Childcompo';
import Home from './Home'

function Dashboard() {

const [b, c]=useState(10);
    
const abc = ()=>{
    c(500);
}
const [statev,statef]=useState(0);

let z=0;
const myinput = (a)=>{
  alert("hi");
  // console.log(a.target.value)
  // console.log(a.clientY);
  console.log(a);
  statef(a.screenX);
   z = a.screenX;

}

const a=10;
  return (

    <div>
        <Home/>
        <h1>welcome to Dashboard</h1>
      {a}
      <h1 onClick={abc}>{b}</h1>
      <input type="text" onClick={myinput} />
    <p>screenX: {statev}</p>
    <p>{z}</p>
  <Mychild />
  <About />

    </div>
  )
}

export default Dashboard