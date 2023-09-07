import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import userImg from "./brovector200800186-removebg-preview.png";
import { Link } from 'react-router-dom';
export default function Welcome() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Welcome to your Personal Doctor'],
      typeSpeed: 50,
      backSpeed: 30,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="wel-com">
      <ul>
        <li>
          <h1><span ref={typedRef}></span></h1>
        </li>
        

        </ul>
          <p>
            Why make guesses about your health? Welcome to the future of healthcare with Digi Doctor – your trusted AI-driven virtual physician. Say goodbye to uncertainty and long waiting times, and say hello to convenience and reliable healthcare assistance right at your fingertips.

At Digi Doctor, we understand the importance of accurate and timely medical guidance. With our advanced artificial intelligence technology, you have a personal doctor available whenever you need one. No more guessing about your health concerns – simply talk to Digi Doctor and get a detailed analysis of your symptoms.
          </p>
          <Link to="/select">
        <button className="checkup">Start Check Up</button>
         </Link>
        
      
      <img src={userImg} className="user-img" alt="User" />
      {/* <button className="checkup">Start Check Up</button> */}
    </div>
  );
}