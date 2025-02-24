import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// import App from './App1';
// import App from './Form';
// import App from './Life';
// import App from './Hooks';
// import App from './Table&List';
// import App from './NestedList';
// import App from './PureComp';
// import App from './ReuseComp';
// import App from './Ref';
// import App from './BasicHOC';
// import App from './Routing';
// import App from './DynamicRouting';
// import App from './RouterSetup';
// import App from './ApiMethods';
// import App from './ApiPostMethod';
// import App from './PrevState';
// import App from './StateWithObject';
import App from './Apps'
import Users from './Users';
import reportWebVitals from './reportWebVitals';
import LifeCycle from './RenderLifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router><App /></Router>


    {/* <Users/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
