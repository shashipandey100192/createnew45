import React from 'react';
import ReactDOM from 'react-dom/client';
import MycoreHomee from './coreUI/Home';
import Bootstraphome from './bootstrapUI/Bootstraphome';
import Reactbootstraphome from './reactbootstrapUI/Reactbootstraphome';
import Metrialhome from './metrialUI/metrialhome';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MycoreHomee />
    <Bootstraphome />
    <Reactbootstraphome />
    <Metrialhome />
  </React.StrictMode>
);

