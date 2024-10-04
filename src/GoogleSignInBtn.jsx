import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Import the initialized auth instance

const GoogleSignInBtn = ({onSignIn}) => {
  

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in with Google:', result.user);
      onSignIn(true); // Call the provided callback to update the authentication state
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <button className="provider-btn" onClick={handleGoogleSignIn}>
      <img
                src="google.png"
                alt="Google Logo"
                className="google-btn-logo"
              />
      Sign In with Google
    </button>
  );
};

export default GoogleSignInBtn;