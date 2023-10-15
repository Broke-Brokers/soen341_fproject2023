import React from 'react';
<<<<<<< HEAD:src/components/property-page/BrokerCard.jsx
import '../src/components/property-page/BrokerCard.css' 
=======
import '../components/BrokerCard.css' 
>>>>>>> parent of 8c30fae (created a property-page folder and broke everything.):src/components/BrokerCard.jsx


export default function BrokerCard(props){

/*const brokerName = props.name;
   const email = props.email;
   const phoneNumber = props.phoneNumber;
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
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-github"></i></li>
      <li><i class="fab fa-dev"></i></li>
      <li><i class="fas fa-link"></i></li>
    </ul>
  </div>
</div>
</>
        
        );
        }
        