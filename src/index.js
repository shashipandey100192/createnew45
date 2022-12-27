import React from 'react';
import ReactDOM from 'react-dom/client';
import Myabout from './components/About';
import Abc from './components/Contract';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myabout/>
    <Abc />
  </React.StrictMode>
);

