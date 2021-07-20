import React, {useState, Component, useEffect } from 'react'
import Auth from './Auth/Auth';
import Sitebar from './Home/Navbar';
import ReviewIndex from './Reviews/ReviewIndex';
import Sidebar from './Site/Sidebar';
import {
  BrowserRouter as Router //We are importing the specific part of the package BrowserRouter but calling it Router. 
} from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken)
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <ReviewIndex token={sessionToken}/>: <Auth updateToken={updateToken}/>)
}

  return (
    <div className="App">
      {/* <Sidebar clickLogout={clearToken}/> */}
      {/* <Auth updateToken={updateToken}/> */}
      {protectedViews()}
      <Router>
      <Sidebar sessionToken={sessionToken} clickLogout={clearToken} />
      </Router>
    </div>
  );
}


export default App;
