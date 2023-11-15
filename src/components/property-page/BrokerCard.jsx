import React from 'react';
import '../property-page/BrokerCard.css' 


export default function BrokerCard({ brokerList }){
  let BrokerName, BrokerEmail, BrokerYearsExperience; // Declare these variables in the parent scope

  if (!brokerList) { // evaluates to true if brokerList is null
     //Placeholder name to handle the case where brokerList is empty
     BrokerName = "Albus Dumbledore";
     BrokerEmail = "itsleviosa@hogwarts.com";
     BrokerYearsExperience = "514-252-2525";
  }
  else{
   
    /*brokerName = brokerList.FirstName;
    email = brokerList.Email;
    phoneNumber = brokerList.PhoneNumber;
*/

const { BrokerName, BrokerEmail, BrokerYearsExperience } = brokerList;
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
  {console.log('Data I am getting from search grid', brokerList);}

    const profilePicture = "https://pointrussell.opencities.com/files/content/public/v/5/council/elected-members/albus-dumbledore/albus-dumbledore.jpg?dimension=pageimage&w=480";


    return(
        <>
        <div className="brokerCard">
       <div className="cardTitle">Property Broker</div>
  <div className="profilePic">
  
    <img src={profilePicture} alt={BrokerName} />
  </div>
  <div className="brokerName">
    <h2>{BrokerName}</h2>
  </div>
  <div className="brokerInfo">
   <p>{BrokerEmail}</p>
   <p>{BrokerYearsExperience}</p>
  </div>
  <div className="social">
    <ul>
      <li><i className="fab fa-facebook"></i></li>
      <li><i className="fas fa-envelope"></i></li>
            <li><i className="fas fa-phone"></i></li>
      <li><i className="fas fa-link"></i></li>
    </ul>
  </div>
  <button onClick={()=>{modifytest({BrokerName},{BrokerEmail},{BrokerYearsExperience});}}
  
  >Modify</button>
</div>

</>
        
        );
        }
        