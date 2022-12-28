import React from "react";
import './global.css';
import About11 from '../components/About';

function MycoreHomee()
{
    const a =50;
    const b = "this is string data type";
    const c = <h1> this is jsx systex {a} </h1>;
    const d = <About11 />;


    return(
        <> 
        <nav className="nav1">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </nav>
        <div className="box"> 
            <h1>welcome:{a}</h1>
            <h1>{b}</h1>
            {c}
            {d}

        </div>



        </>
        
    )
}
export default MycoreHomee;