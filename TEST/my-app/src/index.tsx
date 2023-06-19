import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './front/loginPage/Login';
import Password from './front/loginPage/Password';
import App from './front/App';
import PagePrincipale from './front/quiSommesNous/PagePrincipale';
import EasyCra from './front/produits/EasyCra';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/login/password' element={<Password/>} />
        <Route path='/qui-sommes-nous' element={<PagePrincipale/>} />
        <Route path='/produits' element={<EasyCra/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
