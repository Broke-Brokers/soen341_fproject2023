import React from 'react';
import '../property-page/BrokerCard.css' 


export default function BrokerCard(props){

/*const brokerName = props.name;
   const email = props.email;
   const phoneNumber = props.phoneNumber;


   /*The fields:
     Broker_id integer PK
  First_Name VARCHAR
  Last_Name VARCHAR
  Phone_Number VARCHAR
  Email Varchar
   */
    

   /*For testing purposes these are hardcoded, please remove after testing*/
   const brokerName = "Albus Dumbledore";
   const email = "itsleviosa@hogwarts.com";
   const phoneNumber = "514-252-2525";
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
   <p>{phoneNumber}</p>
  </div>
  <div className="social">
    <ul>
      <li><i class="fab fa-facebook"></i></li>
      <li><i class="fas fa-envelope"></i></li>
            <li><i class="fas fa-phone"></i></li>
      <li><i class="fas fa-link"></i></li>
    </ul>
  </div>
</div>
</>
        
        );
        }
        