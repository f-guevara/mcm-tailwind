import { signOut } from 'firebase/auth';
import {auth } from './firebaseConfig';


function NavBar({ isLoggedIn, userProfile, onLogout }) {

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the current user
      onLogout(); // Call the onLogout handler passed from App component
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <>
    <nav className="navbar">
      <div className="logo">#MOODY</div>
      {isLoggedIn &&  (
        <div className="user-info">
          <button className="sign-out-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </nav>
    <section className='user-info'>
     <div className="user-section">
             {userProfile && userProfile.photoURL ? (
              <img
                src={userProfile.photoURL}
                alt="Profile"
                className="profile-pic"
              />
            ) : (
              <img
                src="default-profile-picture.jpeg"
                alt="Profile"
                className="profile-pic"
              />
            )}
            {userProfile && userProfile.displayName ? (
              <h2 id="user-greeting">Hey {userProfile.displayName}, how are you?</h2>
            ) : (
              <h2 id="user-greeting">Hey friend, how are you?</h2>
            )}
      </div>
    </section>
    </>
  )
}

export default NavBar