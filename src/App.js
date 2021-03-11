//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './components/Login';
import Navbar from './components/Navbar';
//import Contract from './components/Contract';
import Faq from './components/Faq/Faq';
import Logout from './components/Logout';
import GlobalStyle from './components/styles/GlobalStyles'
import Accounts from './components/Contracts/Accounts';
import Offline from './components/Offline'

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}


function App() {

  const [token, setToken] = useState();
  const [fullName, setFullName] = useState();

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        {
          token ? 
          <Switch>
            <Route exact path="/" >
              <Navbar />
              <Accounts token={token}/>
            </Route>
            <Route path="/faq">
              <Navbar />
              <Faq />
            </Route>
            <Route path="/logout">
              <Navbar />
              <Logout token={token} setToken={setToken} fullName={fullName}/>
            </Route>
            <Route path="/offline">
              <Navbar />
              <Offline></Offline>
            </Route>
          </Switch>
          :
          <Switch>
            <Route exact path="/offline">
              <Navbar />
              <Offline></Offline>
            </Route>
            <Route path="/">
              <Login setToken={setToken} setFullName={setFullName}/> 
            </Route>
          </Switch>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
