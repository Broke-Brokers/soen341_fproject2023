import React from 'react';
import '../property-page/BrokerCard.css' 


export default function BrokerCard({ brokerList }){
  let brokerName, email, phoneNumber; // Declare these variables in the parent scope

  if (!brokerList) { // evaluates to true if brokerList is null
     //Placeholder name to handle the case where brokerList is empty
     brokerName = "Albus Dumbledore";
     email = "itsleviosa@hogwarts.com";
     phoneNumber = "514-252-2525";
  }
  else{
  
    brokerName = brokerList.FirstName;
    email = brokerList.Email;
    phoneNumber = brokerList.PhoneNumber;

   }
   /*The fields:
     Broker_id integer PK
  First_Name VARCHAR
  Last_Name VARCHAR
  Phone_Number VARCHAR
  Email Varchar
   */
    

  const modifytest = async(nametest, email,phone)=>
  {console.log(nametest,email,phone);}

 


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
  <button onClick={()=>{modifytest(brokerName,email,phoneNumber);}}
  
  >Modify</button>
</div>

</>
        
        );
        }
        