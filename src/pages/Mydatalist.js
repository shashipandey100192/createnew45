import React, { Fragment, useState } from 'react';
import axios from 'axios';

function Mydatalist() {
    const [sv,sf]=useState([]);


const first =()=>{

    axios.get('https://jsonplaceholder.typicode.com/albums').then((res)=>{
        console.log(res.data);
        sf(res.data);
    });
}

  return (
    <Fragment>
        <button type='button' onClick={first}>fatch data</button>
            {sv.map((e)=>{
                return <h1 key={e.id}>{e.id} {e.title}</h1>
            })}


           
               
            

            {/* <div className="container">
                <div className="row">
                {sv.map((e)=>{
                    return(
                    <div className='col-4' key={e.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>
                    </div>
                    )
                    })}
                </div>
            </div> */}

                



    </Fragment>
  )
}

export default Mydatalist