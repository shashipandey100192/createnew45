import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Dashboard from './pages/Dashboard';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage />}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

