import React from 'react';
import {useState, useEffect} from 'react';
import BrokerCard from '../property-page/BrokerCard';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs } from 'firebase/firestore/lite';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import firebase from "firebase/compat/app";
/*import { getFirestore } from "firebase/firestore";*/
// Required for side-effects
import "firebase/firestore";
import { db } from '../../firebase_configuration.js';
import './Search_Result_Grid.css';
import { async } from '@firebase/util';


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
  const [brokerRecords,setBrokerRecords] = useState([]);       //data from firebase
  const [filterData, setFilterData] = useState([]);            // data fetch from firebase according to filter criteria 
  const [nbYears, setnbYear] = useState()

  async function getBrokers()
  {
     onSnapshot(brokerCollectionRef, (brokerSnapshot)=> {
      setBrokerRecords(brokerSnapshot.docs.map(doc=> doc.data()));
      setFilterData(brokerSnapshot.docs.map(doc=> doc.data()))
  });
  }
     

useEffect(() => { 

getBrokers()

}, [db])

  // An array to represent the number of results to display
  const itemResults = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // ...as many as you want
  console.log('Data in Search_Result_Grid:', brokerRecords);
  console.log('Data of filter: ', filterData);
  const FilterName = (event)=>{
    setFilterData(brokerRecords.filter((f)=>
    //important that return function return variable as it's written in Firebase
    {return f.BrokerName && f.BrokerName.toLowerCase().includes(event.target.value)}))
  }

  const FilterLanguage = (event)=>{
    setFilterData(brokerRecords.filter((f)=>
    {
      
      if (event.target.value==="all"){
         getBrokers()
      } 
      else if (event.target.value==="french"){
        return f.BrokerLanguage && f.BrokerLanguage.toLowerCase().includes(event.target.value)
      }
      else if (event.target.value==="english"){
          return f.BrokerLanguage && f.BrokerLanguage.toLowerCase().includes("english")
      }
      
    }))

  }
  const FilterExperienceYears = (event)=>{
    if(event.target.value>=0){
      setnbYear(event.target.value)
    }else{
      setnbYear(0)
    }
    setFilterData(brokerRecords.filter((broker)=>
    { if(event.target.value>=0){
      return broker.BrokerYearsExperience >= event.target.value;
    }else{
      return broker;
    }
  }
    ));
  }

  
  return (

<>
    <div className="filterContainer">
    <input id="searchInput1" type="text" placeholder="Search Broker name"  onChange={FilterName}/>
      {/* Render the component for each result in the array */}
       
       <select onChange={FilterLanguage} >
        <option value="all">Select language</option>
        <option value="french">French</option >
        <option value="english">English</option>
      </select>

      
      <input id="searchInput3" type="number" placeholder="Search Years of experience"  onChange={FilterExperienceYears}/>
      {/* Render the component for each result in the array */}
    </div>
  
    <div className="grid-container">
        
      
      {filterData.map((broker, index) => (
        <BrokerCard key={index} brokerRecords={broker} /> // Use a unique 'key' prop for each element
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
