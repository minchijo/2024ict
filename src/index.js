import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

//import App from './App';
//import App from './b_conditional/1_truthy';
//import App from './b_conditional/2_inline';
//import App from './b_conditional/3_element_variable';
//import App from './b_conditional/4_stop_rendering';
//import App from './b_conditional/MyMenu';
//import App from './a_async/async';
//import App from './a_async/event_func_정리';
//import App from './c_form/1_button';
//import App from './c_form/2_form';
//import App from './c_form/3_uncontrolled';
//import App from './c_form/9_연습';
//import App from './d_container/2_containment';
//import App from './e_immer/2_exercise';
import App from './e_immer/3_immer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
