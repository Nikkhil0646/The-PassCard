import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './Firebase-config';
import { signInWithPopup } from 'firebase/auth';
import './Sign.css';
import Cookies from 'universal-cookie';

function SignIn() {
  const navigate = useNavigate();
  // const cookies = new Cookies();
  const cookies = useMemo(() => new Cookies(), []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (cookies.get('authenticated')) {
      setIsAuthenticated(true);
    }
  }, [cookies]);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsAuthenticated(true);
        
      const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

      cookies.set('authenticated', 'true', { path: '/' });
      navigate('/App');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      // Show an error message to the user
    }
  };

  const handleNext = () => {
    navigate('/App');
  };

  return (
    <div className='main'>
      <div className='sign-in'>
        <h1 className='head'>Welcome! To the Sign In </h1>
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
