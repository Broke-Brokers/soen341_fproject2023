// React Component
import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Images/LoginSignup/person.png';
import email_icon from '../Images/LoginSignup/email.png';
import password_icon from '../Images/LoginSignup/password.png';

import { useNavigate } from 'react-router-dom';

// Firebase Initialization and Configurations
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase_configuration' // make sure this path is correct
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';


import Cookies from 'js-cookie';




// Initialize Firestore
const db = getFirestore();


// Functions for user profile management
const createUserProfile = async (userCredential, additionalInfo) => {
    await setDoc(doc(db, "userProfiles", userCredential.user.uid), additionalInfo);
  };
  
  const getUserProfile = async (uid) => {
    const docRef = doc(db, "userProfiles", uid);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such user profile!");
      return null;
    }
  };

  const LoginSignup = () => {

    

    const navigate = useNavigate();

    const [view, setView] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(""); // State to handle success messages
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [userType, setUserType] = useState("broker");
    
//---------------------------------------------------------------------------
    const [selectedUserType, setSelectedUserType] = useState("guest"); 

    // Function to handle setting user type cookie for testing
  const setUserTypeForTesting = (selectedUserType) => {
    Cookies.set('usertypeID', selectedUserType);
    window.dispatchEvent(new Event('cookieChange'));
    navigate('/'); // Redirect to home page
  };
//---------------------------------------------------------------------------

        // Function to handle user login
        const handleLogin = (userType) => {
            Cookies.set('usertypeID', userType);
            window.dispatchEvent(new Event('cookieChange'));
        };
    
        // Function to navigate to home after successful login/signup
        const navigateToHome = () => {
            navigate('/');
        };

    const register = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const additionalInfo = { surname, name, userType };
          await createUserProfile(userCredential, additionalInfo);
          handleLogin(userType); // Call handleLogin with the correct user type
          setSuccess("Successfully signed up! Redirecting to home page...");
          setError("");
          navigateToHome();
        } catch (err) {
          setError(err.message);
          setSuccess("");
        }
      };
    
      const login = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          // Get the user type from the user's profile or another method
          const userProfile = await getUserProfile(userCredential.user.uid);
          if (userProfile) {
            handleLogin(userProfile.userType); // Call handleLogin with the correct user type
          }
          setError("");
          navigate('/');
        } catch (err) {
          setError(err.message);
        }
      };
    //-----------------------------------------------------------
   
     // Function to set cookie and dispatch event to update userType in the App component
  const setUserTypeAndRedirect = (userType) => {
    Cookies.set('usertypeID', userType);
    window.dispatchEvent(new Event('cookieChange'));
    navigate('/'); // Redirect to home page
  };

    //---------------------------------------------------------------
    return (
      <div className='container'>
        <div className="header">
          <div className="text">{view}</div>
          <div className="underline"></div>
          <div className="toggleView" onClick={() => setView(view === "Login" ? "Signup" : "Login")}>
            <div className={`switch`} data-view={view}>
              <div className="switch-slider"></div>
              <div className="switch-label">
                {view === "Login" ? "Signup" : "Login"}
              </div>
            </div>
          </div>
        </div>
  
        {success && <div className="success">{success}</div>} {/* Display success messages */}
  
        {/* Dropdown for testing user type without login/signup */}
        {view === "Login" && (
                      <>
                        <div className="titletext-testing">User Type for Testing</div>
                        <div className='dropdown-testing input'>
                          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="guest">Guest</option>
                            <option value="broker">Broker</option>
                            <option value="system_admin">System Admin</option>
                            <option value="home_buyer">Home Buyer</option>
                          </select>
                        </div>
                        <button className="submit-testing" onClick={() => setUserTypeAndRedirect(userType)}>
                          (Test)
                        </button>
                      </>
                    )}
                {view === "Signup" && (
                    <>
                        <div className="titletext">User Type</div>
                        <select className='dropdown' value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="broker">Broker</option>
                            <option value="system_admin">System Admin</option>
                            <option value="home_buyer">Home Buyer</option>
                        </select>
                        <div className='input'>
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder='Surname' value={surname} onChange={(e) => setSurname(e.target.value)}/>
                    </div>
                    <div className='input'>
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    </>
                )}
    
                <div className='inputs'>
                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                    </div>
    
                    <div className='input'>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
    
                    {error && <div className="error">{error}</div>} {/* Display errors */}
    
                    <div className="submit-container">
                        {view === "Signup" && <button className="submit" onClick={register}>Sign Up</button>}
                        {view === "Login" && <button className="submit" onClick={login}>Login</button>}
                    </div>
                </div>
            </div>
        );
    }
    
    export default LoginSignup;