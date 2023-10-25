import React from 'react'
import Add_Button from './components/buttons/Add_Button'
import Broker_Offer_Grid from './components/Profile-page/Broker_Offer_Grid' //Broker_Offer_Grid

import {useState, useEffect} from "react";
import {db} from './firebase_configuration.js'
import { collection, getDocs} from "firebase/firestore";

function Profile() {


  const [newPrice, setNewPrice] = useState("") 
  const [newAdress, setNewAdress] = useSate(0)
  const createProperty = async () => {

  }

  return (

    

    <div>

    <input placeholder ="Price..."/>
    <input type= "number" placeholder="Adress..." />

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
