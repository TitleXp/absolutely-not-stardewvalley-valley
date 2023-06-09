import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/userContext'
import { ErrorProvider } from './context/errorContext'
import { CartProvider } from './context/cartContext';

import 'semantic-ui-css/semantic.min.css'
// import './stardew.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorProvider>
    <UserProvider>
      <CartProvider>
        {/* <React.StrictMode> */}
          <Router>
            <App />
          </Router>
        {/* </React.StrictMode> */}
      </CartProvider>
    </UserProvider>
  </ErrorProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
