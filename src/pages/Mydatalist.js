import React, { Fragment, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

const Mydata=[
    {
        title:"books",
        id:1,
        imgs:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-80131937/80131937.jpg",
        disc:"These books from female authors are a sure-fire way to beat those winter blues. 7 Books by Women Authors for Your Winter Reading List. Follow Us On Social Media.",
        auth:"ducat india",
        designer: "Brij",
        classtime:'4-5pm',
        public:"10-jan-2023"
    },
    {
        title:"books",
        id:2,
        imgs:"https://images.indianexpress.com/2020/04/books_759.jpg",
        disc:"Read Bible, most read English Book, with explanations, starting with Abraham. Examine the Message. Learn the Story. Explore the Bible. ",
        auth:"ducat india",
        designer: "Brij kishor",
        classtime:'4-5pm',
        public:"10-jan-2023"
    },
    {
        title:"books",
        id:3,
        imgs:"https://images.indianexpress.com/2020/04/books_759.jpg",
        disc:"Read Bible, most read English Book, with explanations, starting with Abraham. Examine the Message. Learn the Story. Explore the Bible. ",
        auth:"ducat india",
        designer: "Brij kishor",
        classtime:'4-5pm',
        public:"10-jan-2023"
    },
    {
        title:"books",
        id:4,
        imgs:"https://images.indianexpress.com/2020/04/books_759.jpg",
        disc:"Read Bible, most read English Book, with explanations, starting with Abraham. Examine the Message. Learn the Story. Explore the Bible. ",
        auth:"ducat india",
        designer: "Brij kishor",
        classtime:'4-5pm',
        public:"10-jan-2023"
    },
    {
        title:"books",
        id:5,
        imgs:"https://images.indianexpress.com/2020/04/books_759.jpg",
        disc:"Read Bible, most read English Book, with explanations, starting with Abraham. Examine the Message. Learn the Story. Explore the Bible. ",
        auth:"ducat india",
        designer: "Brij kishor",
        classtime:'4-5pm',
        public:"10-jan-2023"
    }
]


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
        <Home />
        <button type='button' className='btn btn-danger' onClick={first}>fatch data</button>
            {/* {sv.map((e)=>{
                return <h1 key={e.id}>{e.id} {e.title}</h1>
            })} */}

            <div className='container'>
                <div className='row'>
                    {sv.map((p)=>{
                        return(
                                <div className='col-4 mt-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{p.userId}</h5>
                                        <p class="card-text">{p.title}</p>
                                        <a href="#" class="card-link">{p.id}</a>
                                        <button type='button' className='btn btn-primary btn-sm'>{p.id}</button>
                                    </div>
                                    </div>
                                </div>
                            )
                        })}

                </div>
            </div>


            <div className='container'>
                <div className='row'>
                    {Mydata.map((p)=>{
                        return(
                                <div className='col-4 mt-3'>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{p.id}</h5>
                                        <img src={p.imgs} width="100%" />
                                        <p>{p.disc}</p>
                                        <h2>{p.auth}</h2>
                                        <h3>{p.public}</h3>
                                        <button type='button' className='btn btn-primary btn-sm'>{p.id}</button>
                                    </div>
                                    </div>
                                </div>
                            )
                        })}

                </div>
            </div>


    </Fragment>
  )
}

export default Mydatalist