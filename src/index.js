import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Data from './Component/Card';
import Review from './Component/Review';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <React.StrictMode>
  
  <App />
 <Data />
  <Review /> 
   </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();