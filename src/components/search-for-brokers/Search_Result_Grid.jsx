import React from 'react';
import {useState, useEffect} from 'react';
import BrokerCard from '../property-page/BrokerCard';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from "firebase/compat/app";
/*import { getFirestore } from "firebase/firestore";*/
// Required for side-effects
import "firebase/firestore";

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

export default function Search_Result_Grid() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([])
  async function getBroker(db) {
    const myBrokers = collection(db, 'Broker');
    const brokerSnapshot = await getDocs(myBrokers);
    const brokerList = brokerSnapshot.docs.map(doc => doc.data());
    return brokerList;
  }

  useEffect(() => {
    // Call the getBroker function to fetch the data when the component mounts
    const fetchData = async () => {
      const brokerData = await getBroker(db);
      setData(brokerData); // Set the data in state
      setRecords(brokerData);
    };
    fetchData();
  }, [db]); // Include 'db' as a dependency to ensure useEffect is called when it changes

  // An array to represent the number of results to display
  const itemResults = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // ...as many as you want
  console.log('Data in Search_Result_Grid:', data);
  const Filter = (event)=>{
    setRecords(data.filter((f)=>
    {return f.FirstName && f.FirstName.toLowerCase().includes(event.target.value)}))
  }
  return (
    
    <div className="grid-container">
      <input id="searchInput1" type="text" placeholder="Search here..."  onChange={Filter}/>
      {/* Render the component for each result in the array */}
      
      {records.map((broker, index) => (
        <BrokerCard key={index} brokerList={broker} /> // Use a unique 'key' prop for each element
      ))}
    </div>
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
