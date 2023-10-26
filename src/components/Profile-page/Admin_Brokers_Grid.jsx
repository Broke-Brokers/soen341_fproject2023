import React from 'react';
import './Admin_Brokers_Grid.css';
import {useState, useEffect} from "react";
//allows connection to firebase
import {db} from '../../firebase_configuration.js'
import { collection, getDocs} from "firebase/firestore";



function Admin_Brokers_Grid(){
 
 const [brokers, setBrokers]=useState([]);
 //reference the broker collection in the databse of firebase
 const brokersCollectionRef = collection (db,"Broker")
 useEffect(() => {
  const getBrokers = async()=>{
    //get all the data in broker collection
    const data = await getDocs(brokersCollectionRef);
    //setting brokers array = array of document data & id for each document
    setBrokers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    
  };
  getBrokers();
 },[])






  return (
  <div className="Admin_Brokers_Grid">






    
    {brokers.map((broker)=>{
      return (
      <div> 
        {""}
        <h1> Broker ID: {broker.BrokerID} </h1>
        <h1> User Type ID: {broker.UsertypeID} </h1>
        <h1> Client File ID: {broker.ClientFileID} </h1>
        <h1> Email: {broker.Email} </h1>
        <h1> First name: {broker.FirstName} </h1>
        <h1> Last Name: {broker.LastName} </h1>
        <h1> Username: {broker.Username} </h1>
        <h1> Password: {broker.Password} </h1>
        <h1> Phone Number: {broker.PhoneNumber} </h1>
        
      </div>
      );
      })}
  </div>
  );
}

export default Admin_Brokers_Grid;