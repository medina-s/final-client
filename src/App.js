import React, {useState,  useEffect } from 'react'
import Auth from './Auth/Auth';
import Sitebar from './Home/Navbar';
import ReviewIndex from './Reviews/ReviewIndex';
import Navigation from './Home/Navigation'
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
  window.location.href="/" //Redirects to localhost:3001 on click of logout
}

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <ReviewIndex token={sessionToken}/>: <Auth updateToken={updateToken}/>)
}

  return (
    <div className="App">
      <Router>
      {sessionToken !== '' && <Sitebar sessionToken={sessionToken} clickLogout={clearToken}/>} 
      {protectedViews()}
      <Navigation sessionToken={sessionToken} />
      </Router>
    </div>
  );
};


export default App; 