/*This is a React +Firebase app, pls check all the components, and now, I need to ...*/

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
//import Navbar from './NavBar';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserProfile(user);
      } else {
        setIsLoggedIn(false);
        setUserProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUserProfile(null);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={isLoggedIn ? <Navigate to="/profile" /> : <Login />} />
          <Route path="profile" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Profile userProfile={userProfile} />
            </PrivateRoute>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
