import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './Firebase-config';
import { signInWithPopup } from 'firebase/auth';
import './Sign.css';
import Cookies from 'js-cookie';

function SignIn() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (Cookies.get('authenticated')) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsAuthenticated(true);
      Cookies.set('authenticated', 'true');
      navigate('/App');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };
  
  const handleNext = () => {
    navigate('/App');
  };

  return (
    <div className='main'>
      <div className='sign-in'>
        <h1 className='head'>Sign In</h1>
        {isAuthenticated ? (
          <>
            <p>You are already signed in.</p>
            <button onClick={handleNext}>Next</button>
          </>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default SignIn;

