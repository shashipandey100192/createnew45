import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Dashboard from './pages/Dashboard';
import { About } from './pages/Childcompo';
import Mydatalist from './pages/Mydatalist';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage />}/>
        {/* <Route path='dashboard' element={<Dashboard/>}/> */}
        <Route path='dashboard' element={<Mydatalist/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

