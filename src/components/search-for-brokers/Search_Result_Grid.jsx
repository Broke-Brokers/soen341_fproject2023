import React from 'react';
import {useState, useEffect} from 'react';
import BrokerCard from '../property-page/BrokerCard';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs } from 'firebase/firestore/lite';
import { collection, onSnapshot } from 'firebase/firestore';
import firebase from "firebase/compat/app";
/*import { getFirestore } from "firebase/firestore";*/
// Required for side-effects
import "firebase/firestore";
import { db } from '../../firebase_configuration.js';
import './Search_Result_Grid.css';


/*
const firebaseConfig = {
    apiKey: "AIzaSyBkEsZF6ISGAYWGaI9ALstOzHyHlVvqYuQ",
    authDomain: "soen341brokebrokers.firebaseapp.com",
    projectId: "soen341brokebrokers",
    storageBucket: "soen341brokebrokers.appspot.com",
    messagingSenderId: "1010248927281",
    appId: "1:1010248927281:web:d1c5ff69471507b81bed10",
    measurementId: "G-602KDDJBP8"
  };



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
*/

export default function Search_Result_Grid() {

  // OLD CODE
 /* const [data, setData] = useState([]);
  const [records, setRecords] = useState([])
  async function getBroker(db) {
    const myBrokers = collection(db, 'Broker');
    const brokerSnapshot = await getDocs(myBrokers);
    const brokerList = brokerSnapshot.docs.map(doc => doc.data());
    return brokerList;
  }
*/
/*
  useEffect(() => {
    // Call the getBroker function to fetch the data when the component mounts
    const fetchData = async () => {
      const brokerData = await getBroker(db);
      setData(brokerData); // Set the data in state
      setRecords(brokerData);
    };
    fetchData();
  }, [db]); // Include 'db' as a dependency to ensure useEffect is called when it changes
*/




  /*
  https://firebase.google.com/docs/firestore/query-data/listen
  */

  // Use useState to set a new constanct broker
  const brokerCollectionRef = collection(db,'Broker');
  const [brokerRecords,setBrokerRecords] = useState([]);  

useEffect(() => { 
    const unsubscribe = onSnapshot(brokerCollectionRef, (brokerSnapshot)=> 
    {setBrokerRecords(brokerSnapshot.docs.map(doc=> doc.data()));
  });

  return () => {
    // Cleanup function to unsubscribe when the component is unmounted, prevents memory leaks
    unsubscribe();
  };
    }, []);

  // An array to represent the number of results to display
  const itemResults = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // ...as many as you want
  console.log('Data in Search_Result_Grid:', brokerRecords);
  const Filter = (event)=>{
    setBrokerRecords(brokerRecords.filter((f)=>
    {return f.FirstName && f.FirstName.toLowerCase().includes(event.target.value)}))
  }

  const FilterLanguage = (event)=>{
    setBrokerRecords(brokerRecords.filter((broker)=>
    {return broker.Language && broker.Language.toLowerCase().includes(event.target.value);}
    ));
  }
  const FilterExperienceYears = (event)=>{
    setBrokerRecords(brokerRecords.filter((broker)=>
    {return broker.ExperienceYears >= parseInt(event.target.value);}
    ));
  }
  
  return (

<>
    <div className="filterContainer">
    <input id="searchInput1" type="text" placeholder="Search here..."  onChange={Filter}/>
      {/* Render the component for each result in the array */}

      <input id="searchInput2" type="text" placeholder="Search Language"  onChange={FilterLanguage}/>
      {/* Render the component for each result in the array */}
     
      <input id="searchInput3" type="number" placeholder="Search Years of experience"  onChange={FilterExperienceYears}/>
      {/* Render the component for each result in the array */}
    </div>
  
    <div className="grid-container">
        
      
      {brokerRecords.map((broker, index) => (
        <BrokerCard key={index} brokerList={broker} /> // Use a unique 'key' prop for each element
      ))}
    </div>
    </>
  );
}



/*
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default function Search_Result_Grid() {
    const [brokers, setBrokers] = useState([]);

    async function getBroker(db) {
        const myBrokers = collection(db, 'Broker');
        const brokerSnapshot = await getDocs(myBrokers);
        const brokerList = brokerSnapshot.docs.map(doc => doc.data());
        setBrokers(brokerList);
        return brokerList;
      }
      
  useEffect(() => {
    // Call the getBroker function to fetch the data when the component mounts
    const fetchData = async () => {
      const data = await getBroker('Broker'); 
      
    };
    fetchData();
  }, []);

    // An array to represent the number of results to display
    // Each item in this array represents a result
    const itemResults = [1, 2, 3,4,5,6,7,8,9]; // ...as many wanted

    return (
        <div className="grid-container">
            {/* Render the component for each results in the array }*/
          /*  {itemResults.map((broker, index) => (
                <BrokerCard key={index} brokerList={data} /> // Use a unique 'key' prop for each element
            ))}
        </div>
    );
    
/*}*/
