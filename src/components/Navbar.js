import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import logo from "./logo.png";
import { Link, animateScroll as scroll } from 'react-scroll';
import { app, analytics } from './firebase'; // Import both app and analytics
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { logEvent } from 'firebase/analytics';

export default function Navbar() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      console.log("Signing in with email:", email);
      console.log("Password:", password);

      const db = app.firestore();
      const usersCollection = collection(db, 'users');

      await addDoc(usersCollection, {
        email,
      });

      console.log("Setting showThankYou to true");
      setShowThankYou(true);

      // Log the 'user_signed_in' event to Firebase Analytics
      logEvent(analytics, 'user_signed_in', {
        email: email
      });

      setShowSignInPopup(false);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };


  return (
    <>
      <div className="navdiv">
        <div>
          <a href="/" onClick={scrollToTop}>
            <img src={logo} className="logo" alt="/" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <Link
              to="why-digi"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              WHY DIGI DOCTOR
            </Link>
          </li>
          <li>
            <Link
              to="responsiblity"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              RESPONSIBILITIES
            </Link>
          </li>
          <button className="btn-signin" onClick={() => setShowSignInPopup(true)}>
            SIGN IN
          </button>
        </ul>
      </div>

      {showSignInPopup && (
        <div className="popup-overlay">
          <div className="signin-popup">
            <div className="popup-header">
              <h2>Sign In</h2>
              <button className="popup-close" onClick={() => setShowSignInPopup(false)}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
            <div className="signin-content">
              <form onSubmit={handleSignIn}>
                <div className="input-group">
                  <h3>Email:</h3>
                  <input
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <h3>Password:</h3>
                  <input
                    type="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn-submit" type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      )}
      {showThankYou && (
  <div className="thank-you-message">
    Thank you for signing in!
  </div>
)}
      
    </>
  );
}