import React from 'react';
import ReactDOM from 'react-dom/client';
import MycoreHomee from './coreUI/Home';
import Bootstraphome from './bootstrapUI/Bootstraphome';
import Reactbootstraphome from './reactbootstrapUI/Reactbootstraphome';
import Metrialhome from './metrialUI/metrialhome';
import Heading from './components/Heading';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MycoreHomee />
    <Heading content="Bootstrap Example" variant="primary"/>
    <Bootstraphome />
    <Reactbootstraphome />
    <Heading content="MaterialUI Example" variant="danger"/>
    <Metrialhome />
  </React.StrictMode>
);

