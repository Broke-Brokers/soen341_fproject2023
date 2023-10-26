import React from 'react';
import './Admin_Brokers_Grid.css';
import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, getDocs} from "firebase/firestore";



function Admin_Brokers_Grid(){
 
 const [brokers, setBrokers]=useState([]);
 const brokersCollectionRef = collection (db,"Broker")
 useEffect(() => {
  const getBrokers = async()=>{
    const data = await getDocs(brokersCollectionRef);
    console.log(data);
  };
  getBrokers();
 },[])






  return <div className="Admin_Brokers_Grid"></div>;
}

export default Admin_Brokers_Grid;