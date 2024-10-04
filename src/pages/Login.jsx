import React, { useState } from 'react';
import { authCreateAccountWithEmail, authSignInWithEmail } from '../database/firebaseAuthFunctions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await authSignInWithEmail(email, password);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await authCreateAccountWithEmail(email, password);
    } catch (error) {
      console.error('Error creating account:', error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default Login;
