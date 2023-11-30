import React from 'react';
import BrokerCard from '../property-page/BrokerCard.jsx';
import './Admin_Brokers_Grid.css';
import {useState, useEffect} from "react";
//allows connection to firebase
import {db} from '../../firebase_configuration.js'
import { collection, doc, getDocs, addDoc, updateDoc, onSnapshot} from "firebase/firestore";



function Admin_Brokers_Grid(){
  
// Use useState to set a new constanct broker
const brokerCollectionRef = collection(db,'Broker');
const [brokerRecords,setBrokerRecords] = useState([]);       // Brokers records is an array that contains at each position one broker from Firebase

async function getBrokers()
{
   onSnapshot(brokerCollectionRef, (brokerSnapshot)=> {
    setBrokerRecords(brokerSnapshot.docs.map(doc=> doc.data()));  // allows the array to be a screenshot of Firebase & not the actual documents
    
});
}

useEffect(() => { 

getBrokers()

}, [db])
    console.log("Broker record: ", brokerRecords);
   
  

//MANUAL CRUD: to store in firebase
   //1. FOR CREATE Take user input from setNew to have a new variable using new...
const[newBrokerID, setNewBrokerID]= useState(0)
const[newUserTypeID, setNewUserTypeID]= useState(0)
//const[newClientFileID, setNewClientFileID]= useState(0)
const[newBrokerName, setNewBrokerName]= useState("")
//const[newLastName, setNewLastName]= useState("")
const[newUserName, setNewUserName]= useState("")
const[newEmail, setNewEmail]= useState("")
const[newPassword, setNewPassword]= useState("")
//const[newPhoneNumber, setNewPhone]= useState("")
const[newLanguage, setNewLanguage]= useState("")
const[newYearsExperience, setNewYearsExperience]= useState(0)

const [show,setShow] = useState(false)
/*

//2.FOR UPDATE
const[firebaseID, setFirebaseID]= useState("")
const [show,setShow] = useState(false)




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


*/
//MANUAL CRUD: 
//1.FOR CREATE: function that create a broker when click on create broker
const createBroker = async()=>{
  await addDoc(brokerCollectionRef,{
    //important that variable correspond to the one of Firebase
    BrokerID: newBrokerID,
    UsertypeID: newUserTypeID,
    BrokerName:newBrokerName,
   // LastName:newLastName,
    BrokerUsername:newUserName,
    BrokerEmail:newEmail,
    BrokerPassword:newPassword,
   // PhoneNumber:newPhoneNumber
    BrokerYearsExperience: newLanguage,
    BrokerLanguage: newYearsExperience
  });
  }
  /*
  //2.FOR UPDATE
     //2.1 Get id of document in firebase and previous inputs
  const modifyBroker = async(firebaseID, BrokerID, UsertypeID, ClientFileID, 
    FirstName, LastName, Username, Email,Password, PhoneNumber )=>{
  
      setFirebaseID(firebaseID)
      setNewBrokerID(BrokerID)
      setNewUserTypeID(UsertypeID)
      setNewClientFileID(ClientFileID)
      setNewFirstName(FirstName)
      setNewLastName(LastName)
      setNewUserName(Username)
      setNewEmail(Email)
      setNewPassword(Password)
      setNewPhone(PhoneNumber)
      setShow(true)
  }

  const updateBroker = async()=>{
  const updateData= doc(db,"Broker",firebaseID)
  await updateDoc(updateData,{
    BrokerID: newBrokerID,
    UsertypeID: newUserTypeID,
    ClientFileID: newClientFileID,
    FirstName:newFirstName,
    LastName:newLastName,
    Username:newUserName,
    Email:newEmail,
    Password:newPassword,
    PhoneNumber:newPhoneNumber
  })
  setShow(false)
  setNewBrokerID(0)
  setNewUserTypeID(0)
  setNewClientFileID(0)
  setNewFirstName("")
  setNewLastName("")
  setNewUserName("")
  setNewEmail("")
  setNewPassword("")
  setNewPhone("")
}
*/

  return (


   



     //CRUD MANUALLY NOT INSIDE GRID
      //1. FOR CREATE: setNew...the value entered by user 
      // user enter its input in the placeholder
      // the value of place holder set the variable defined in the beginning
      // Firebase variable will be equals to those variables
      // create button call function that does Firebase variable = user input
      // to display the broker, each broker stored in broker records array will be map to the broker card component
    
  <>
  
  <div className="Admin_Brokers_Grid">


    <input type='number' placeholder='Broker ID...'
       onChange={(event)=> {
        setNewBrokerID(event.target.value);
      }}
    />
    <input type='number' placeholder='User type ID...'
    onChange={(event)=>{
      setNewUserTypeID(event.target.value);
    }}
    />
    
    <input placeholder='Name...'
     onChange={(event)=> {
      setNewBrokerName(event.target.value);
    }}
    />
    
    <input placeholder='username...'
     onChange={(event)=> {
      setNewUserName
    (event.target.value);
    }}
    />
    <input placeholder='email...'
     onChange={(event)=> {
      setNewEmail(event.target.value);
    }}
    />
    <input placeholder='password...'
     onChange={(event)=> {
      setNewPassword(event.target.value);
    }}
    />
    <input placeholder='Language Speak'
    onChange={(event)=> {
      setNewLanguage(event.target.value);
    }}
    />
    <input type='number'placeholder='Years of experience'
    onChange={(event)=> {
      setNewYearsExperience(event.target.value);
    }}
    />

{!show?<button onClick={createBroker}> Create Broker</button>:
        <button onClick={()=>{createBroker()}}>Update</button>
}

</div>

<div className='Broker Grid'>
     {brokerRecords.map((broker, index) => (
        <BrokerCard key={index} brokerRecords={broker} /> // Use a unique 'key' prop for each element
      ))}
   
</div>
</>
    
  
  );
}

export default Admin_Brokers_Grid;