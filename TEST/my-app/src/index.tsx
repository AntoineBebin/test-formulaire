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
import Tarif from './front/tarifPage/Tarif';
import NewAccount1 from './front/loginPage/newAccount/NewAccount1';
import NewAccount2 from './front/loginPage/newAccount/NewAccount2';
import NewAccount3 from './front/loginPage/newAccount/NewAccount3';
import NewAccount4 from './front/loginPage/newAccount/NewAccount4';
import NewAccount5 from './front/loginPage/newAccount/NewAccount5';
import NewAccount6 from './front/loginPage/newAccount/NewAccount6';
import NewAccount7 from './front/loginPage/newAccount/NewAccount7';

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
        <Route path='/login/créer-un-compte' element={<NewAccount1/>} />
        <Route path='/login/créer-un-compte2' element={<NewAccount2/>} />
        <Route path='/login/créer-un-compte3' element={<NewAccount3/>} />
        <Route path ='/login/créer-un-compte4' element={<NewAccount4/>} />
        <Route path='/login/créer-un-compte5' element={<NewAccount5/>} />
        <Route path='/login/créer-un-compte6' element={<NewAccount6/>} />
        <Route path='/login/créer-un-compte7' element={<NewAccount7/>} />
        <Route path='/qui-sommes-nous' element={<PagePrincipale/>} />
        <Route path='/produits' element={<EasyCra/>} />
        <Route path='/tarifs' element={<Tarif/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
