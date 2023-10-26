import React from 'react'
import home_photo from '../../Images/property_image_test1.jpg'
import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, getDocs} from "firebase/firestore";
import'../search-page/House_Card.css';
function Card_home() {

    const [Properties, setProperties] = useState([]);
    const PropertiesCollectionRef = collection(db, "Properties")
  
  
    useEffect(() => {
  
      // get the properties in a clean way
      const getProperties = async () => {
        const data = await getDocs(PropertiesCollectionRef);
        setProperties(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    
      };
  
      getProperties();
    }, []);

    
  return (
    <div>
    {Properties.map((Property) => {
        return (
          

     <div className="HC_infoContainer">

            
     <div className="HC_photoContainer">
     <img src={home_photo} alt=''/>
     </div>
   <div className="HC_InfoBox">
       <h1 className="HC_price">{Property.Price}$</h1>
       <h2 className="HC_postname">House Name</h2>
       <p className="HC_details">{Property.Adress}, {Property.City}, {Property.Province}</p>
       <p className="HC_details">{Property.Neighborhood}</p>
       
       <div className="HC_iconSection">
           <ul className="HC_ul">
   <li className="HC_li"><i class="fa fa-bed"></i>  5 </li>
      <li className="HC_li"><i class="fa fa-bath"></i>  2</li>
      <li className="HC_li"><i class="fa fa-bookmark"></i></li>
      <li className="HC_li"> <i class="fa fa-user-check"></i></li>
 
       </ul>
       </div>
       </div>
      
      
   </div>
        );


    })}
    </div>
  );
  
}

export default Card_home

