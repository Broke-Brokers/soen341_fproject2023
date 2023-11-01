import React from 'react'
import home_photo from '../../Images/property_image_test1.jpg'
import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, getDocs, deleteDoc} from "firebase/firestore";
import'../search-page/House_Card.css';
import Add_Button from '../../components/buttons/Add_Button';
import Creation_Property from '../Profile-page/Creation_Property';
import { doc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


function Card_home() {

    const [Properties, setProperties] = useState([]);
    const PropertiesCollectionRef = collection(db, "Properties")
  
    // const deleteProperty = async (id) => {
    //     const PropertyDoc = doc(db, "Properties", id);
    // };

    const deleteProperty = async (id) => {
      const PropertyDoc = doc(db, "Properties", id);
      await deleteDoc(PropertyDoc);
  };
  
  
    useEffect(() => {
  
      // get the properties in a clean way
      const getProperties = async () => {
        const data = await getDocs(PropertiesCollectionRef);
        setProperties(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
       // await deleteDoc()
    
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
       <h1 className="HC_PropertyListing">{Property.PropertyListing}</h1>
       <h2 className="HC_postname">{Property.PropertyType}</h2>
       <p className="HC_details">{Property.Adress}, {Property.City}, {Property.Province}</p>
       <p className="HC_details">{Property.Neighborhood}</p>
       
       
       <div className="HC_iconSection">
           <ul className="HC_ul">
   <li className="HC_li"><i class="fa fa-bed"></i> {Property.Bedrooms}</li>
      <li className="HC_li"><i class="fa fa-bath"></i>  {Property.Bathrooms}</li>
      <li className="HC_li"><i class="fa fa-bookmark"></i></li>
      <li className="HC_li"> <i class="fa fa-user-check"></i></li>
      <button onClick={() => {deleteProperty(Property.id)}}>
                      Delete
                    </button>
                 
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

