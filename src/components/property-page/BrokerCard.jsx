import React, { useState } from 'react';
import '../property-page/BrokerCard.css' 
import { db } from '../../firebase_configuration';
import { deleteDoc,doc } from '@firebase/firestore';


let docID_forModify,name_forModify="OKOK";
const setDocID_forModify=(currentBrokerID,currentName) =>
{
   docID_forModify = currentBrokerID;
   name_forModify = currentName;
};


export default function BrokerCard({ brokerRecords}){
  //With "brokerRecords", Broker card received the brokers in the array of parent that contain a list of broker
  let brokerName, email, phoneNumber, yearsOfExperience,language,DocumentID; // Declare these variables in the parent scope


  if (!brokerRecords) { // evaluates to true if brokerList is null
     //Placeholder name to handle the case where brokerList is empty
     brokerName = "Albus Dumbledore";
     email = "itsleviosa@hogwarts.com";
     phoneNumber = "514-252-2525";
     yearsOfExperience = "150";
  }
  else{
  
    //Broker Card can now retrieve the field of the actual broker in Firebase
    // important that the variable corresponds to variable in Firebase

    DocumentID = brokerRecords.DocumentID;
    brokerName = brokerRecords.BrokerName;
    email = brokerRecords.BrokerEmail;
    phoneNumber = brokerRecords.PhoneNumber;
    yearsOfExperience = brokerRecords.BrokerYearsExperience;
    language = brokerRecords.BrokerLanguage
   }
   /*The fields:
     Broker_id integer PK
  First_Name VARCHAR
  Last_Name VARCHAR
  Phone_Number VARCHAR
  Email Varchar
   */
    

  

  console.log('Data in broker cards:', brokerRecords);
    const profilePicture = "https://pointrussell.opencities.com/files/content/public/v/5/council/elected-members/albus-dumbledore/albus-dumbledore.jpg?dimension=pageimage&w=480";


    return(
        <>
        <div className="brokerCard">
       <div className="cardTitle">Property Broker</div>
  <div className="profilePic">
  
    <img src={profilePicture} alt={brokerName} />
  </div>
  <div className="brokerName">
    <h2>{brokerName}</h2>
  </div>
  <div className="brokerInfo">
   <p>{email}</p>
   <p>{yearsOfExperience} Years of experience</p>
   <p>Language Spoken: {language}</p>
  </div>
  <div className="social">
    <ul>
      <li><i class="fab fa-facebook"></i></li>
      <li><i class="fas fa-envelope"></i></li>
            <li><i class="fas fa-phone"></i></li>
      <li><i class="fas fa-link"></i></li>
    </ul>
  </div>
 <div className='modifyButton'>
  <button onClick={()=>{setDocID_forModify(DocumentID,brokerName);}}
  
  >Modify</button>
</div>
<div className='deleteButton'>
<button onClick={()=>{
  deleteDoc(doc(db,"Broker",DocumentID))
}}>
  Delete
</button>
</div>
</div>


</>
        
        );
        }

        export {docID_forModify,name_forModify};
        