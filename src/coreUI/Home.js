import React from "react";
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const a=500;
const b=200;
let c=0;
let j="red";
let x=50;

function MycoreHomee()
{
    const variable = "This is an exaple of JavaScript variable"

    if(a>=1000)
    {
        c=a;
    }
    else{
        c=b;
    }

    return(
        <> 
        <nav>
            <div className="company">
                <div className="logo">
                    <img src="/css3Logo.png" alt="Error" className="logo-img" />
                </div>
                <div className="company-name">
                    <span>Company {variable}</span>
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

        <div className="abc">
            <p>welcome {c}</p>
            <h2 style={{color:'red'}}>inline css</h2>
            <h2 style={{color:j,fontSize:`${x}px`}}>inline css</h2>
            <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
        </div>


        

<div className="container-fluid">
    <div className="row">
        <div className="col-4">
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        <div className="col-4">
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        <div className="col-4">
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    </div>
</div>


        </>
        
    )
}
export default MycoreHomee;