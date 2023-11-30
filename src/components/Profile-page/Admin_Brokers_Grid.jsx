import React from 'react';
import BrokerCard from '../property-page/BrokerCard.jsx';
import './Admin_Brokers_Grid.css';
import {useState, useEffect} from "react";
//allows connection to firebase
import {db} from '../../firebase_configuration.js'
import { docID_forModify, name_forModify } from '../property-page/BrokerCard.jsx';
import { collection, doc, query, getDocs, addDoc, updateDoc, onSnapshot, DocumentReference, setDoc} from "firebase/firestore";




function Admin_Brokers_Grid(){
 console.log("Specific id: ", docID_forModify )
// Use useState to set a new constanct broker
const brokerCollectionRef = collection(db,'Broker');
const [brokerRecords,setBrokerRecords] = useState([]);       // Brokers records is an array that contains at each position one broker from Firebase
//const [allIDs, setallIDs] = useState([])

async function getBrokers()
{
   onSnapshot(brokerCollectionRef, async (brokerSnapshot)=> {
    setBrokerRecords(brokerSnapshot.docs.map(doc=> doc.data()));  // allows the array to be a screenshot of Firebase & not the actual documents
    //setallIDs(brokerSnapshot.docs.map(doc=> doc.id));

});
}

useEffect(() => { 

getBrokers()

}, [db])
    console.log("Broker record: ", brokerRecords);
   // console.log("All brokers ID in Firebase: ",allIDs);
   

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




//2.FOR UPDATE
const [firebaseID, setFirebaseID] = useState("")
const [show,setShow] = useState(false)








//MANUAL CRUD: 
//1.FOR CREATE: function that create a broker when click on create broker
const createBroker = async()=>{
  const docref= await addDoc(brokerCollectionRef,{
    //important that variable correspond to the one of Firebase
    BrokerID: newBrokerID,
    UsertypeID: newUserTypeID,
    BrokerName:newBrokerName,
   // LastName:newLastName,
    BrokerUsername:newUserName,
    BrokerEmail:newEmail,
    BrokerPassword:newPassword,
   // PhoneNumber:newPhoneNumber
    BrokerYearsExperience: newYearsExperience,
    BrokerLanguage: newLanguage
  })
 await updateDoc(docref,{
  DocumentID: docref.id
 })

 //clear input field
 setNewBrokerID("")
 setNewUserTypeID("")
 setNewBrokerName("")
 setNewUserName("")
 setNewEmail("")
 setNewPassword("")
 setNewLanguage("Select language")
 setNewYearsExperience("")

 


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