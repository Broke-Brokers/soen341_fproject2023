// React Component
import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Images/LoginSignup/person.png';
import email_icon from '../Images/LoginSignup/email.png';
import password_icon from '../Images/LoginSignup/password.png';


// Firebase Initialization and Configurations
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {db} from '../firebase_configuration.js'
const firebaseConfig = {
  apiKey: "AIzaSyD67j-e8plVp5mtf6Td_7R-OV4Wbo1MmdI",
  authDomain: "soen341db.firebaseapp.com",
  projectId: "soen341db",
  storageBucket: "soen341db.appspot.com",
  messagingSenderId: "388617260788",
  appId: "1:388617260788:web:33bd62fe3f958ca0f658a1"
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


    // END FOR FIRE BASE

    const LogingSignup = () => {
        const [view, setView] = useState("Login");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
    
        const register = async () => {
            try {
                await createUserWithEmailAndPassword(db, email, password);
                setError("");
            } catch (err) {
                setError(err.message);
            }
        };
    
        const login = async () => {
            try {
                await signInWithEmailAndPassword(db, email, password);
                setError("");
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
                        <select className='dropdown'>
                            <option value="broker">Broker</option>
                            <option value="system_admin">System Admin</option>
                            <option value="home_buyer">Home Buyer</option>
                        </select>
                        <div className='input'>
                            <img src={user_icon} alt=""/>
                            <input type="text" placeholder='Surname'/>
                        </div>
                        <div className='input'>
                            <img src={user_icon} alt=""/>
                            <input type="text" placeholder='Name'/>
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
    
    export default LogingSignup;