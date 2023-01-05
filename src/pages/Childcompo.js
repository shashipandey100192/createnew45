import React, { useEffect, useState } from 'react';
import './globla.css';

export const Mychild = ()=>
{
    const [a,b]=useState(2);
    const [x,y]=useState(0);

useEffect(()=>{
    console.log("hi");
    b(localStorage.getItem('username'));
    y(sessionStorage.getItem('clientname'));
});


    return(
        <>
        <h1>heading : userName is: {a}</h1>
        <h2>this is clientId: {x}</h2>
        </>
    )
} 



export const About= ()=>
{
    return(
        <h1 className='heading'>this is second function </h1>
    )
}



