// React Component
import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Images/LoginSignup/person.png';
import email_icon from '../Images/LoginSignup/email.png';
import password_icon from '../Images/LoginSignup/password.png';



// Firebase Initialization and Configurations
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase_configuration' // make sure this path is correct
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';


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
    const [view, setView] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [userType, setUserType] = useState("broker");

    const register = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // After successful registration, create a user profile in Firestore
            const additionalInfo = { surname, name, userType };
            await createUserProfile(userCredential, additionalInfo);
            setError("");
            // Redirect user or change app state here
        } catch (err) {
            setError(err.message);
        }
    };

    const login = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // After successful login, fetch the user profile
            const userProfile = await getUserProfile(userCredential.user.uid);
            if (userProfile) {
                console.log(userProfile); // You can use the user profile information here
            }
            setError("");
            // Redirect user or change app state here
        } catch (err) {
            setError(err.message);
        }
    };
    
    
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