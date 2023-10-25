import React from 'react'
import Add_Button from './components/buttons/Add_Button'
import Broker_Offer_Grid from './components/Profile-page/Broker_Offer_Grid' //Broker_Offer_Grid

import {useState, useEffect} from "react";
import {db} from './firebase_configuration.js'
import { collection, getDocs, addDoc} from "firebase/firestore";

function Profile() {

  const [Properties, setProperties] = useState([]);
  const PropertiesCollectionRef = collection(db, "Properties")

  const [newPrice, setNewPrice] = useState("") 
  const [newAdress, setNewAdress] = useState(0)
  const [newCity, setNewCity] = useState("")
  const createProperty = async () => {

      // To add the fetch values to the database
    await addDoc( PropertiesCollectionRef, { Price: newPrice, Adress: newAdress }) ;

  }

  return (

    

    <div>

    <input type = "number" placeholder ="Price..." 
    
      onChange={(event) => {
      
      setNewPrice(event.target.value);
    
      }}
    /> 
  
      <br />

    

    <input placeholder ="Adress..." 
    
      onChange={(event) => {
      
      setNewAdress(event.target.value);
    
      }}
    />

      <br />

     <input placeholder ="City..." 
    
      onChange={(event) => {
       setNewCity(event.target.value);
  
        }}
      />

<br />

    <input placeholder ="Province..." 

      onChange={(event) => {
      setNewCity(event.target.value);

       }}
      />

<br />

    <input placeholder ="Province..." 

      onChange={(event) => {
      setProvince(event.target.value);

       }}
      />
    
   <br />
    <button onClick={createProperty}> Create Property</button>

            {/*====FOR SYTEM ADMIIN======*/}

        {/*The + button is at the top left corner of the page */}
        {/*brokers showed alphabetically*/}
        {/*click on card : edit button is a pen*/}
         {/*click on card delete button  is a trash*/}

         
      <Broker_Offer_Grid/>
      
    
    </div>
  )
}

export default Profile
