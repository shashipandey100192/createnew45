import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynav from './components/Mynav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import BootstrapUI from './components/BootstrapUI';
import About from './components/About';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    <BrowserRouter>
      <Mynav/>
      <Routes>
       <Route path='' element={<Home/>}/>
       <Route path='bootstrapui' element={<BootstrapUI />}/>
       <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

