import React from 'react'
import'../search-page/House_Card.css';
import home_photo from '../../Images/property_image_test1.jpg'
import { deleteDoc, doc } from '@firebase/firestore';
import { db } from '../../firebase_configuration';





export default function Home_card({property}){
  // House Card component will received the property from the Firebase screenshot as "property"
  
   //House card extract field from Firebase thanks to property
   // important that the variable match the one from Firebase
    const price = property.Price;
    const Adress = property.Adress;
    const City= property.City;
    const Province = property.Province;
    const Neghborhood=property.Neighborhood;
    const No_bathrooms= property.Bathrooms;
    const No_Bedrooms = property.Bedrooms;
   const propertyType = property.PropertyType;
   const listingType = property.ListingType;
   const DocumentID = property.DocumentID;
 

   console.log("Data in house card:", property)
  
   

 
    

   
   
    return(

        /*<a href="/propertypage">*/<div className="HC_infoContainer">

     
      <div className="HC_photoContainer">
      <img src={home_photo} alt=''/>
      </div>
    <div className="HC_InfoBox">
        <h1 className="HC_price">{price}$</h1>
        <h2 className="HC_postname">{propertyType}, {listingType}</h2>
        <p className="HC_details">{Adress}, {City}, {Province}</p>
        <p className="HC_details">{Neghborhood}</p>
        
        <div className="HC_iconSection">
            <ul className="HC_ul">
    <li className="HC_li"><i class="fa fa-bed"></i>  {No_Bedrooms}</li>
       <li className="HC_li"><i class="fa fa-bath"></i>  {No_bathrooms}</li>
       <li className="HC_li"><i class="fa fa-bookmark"></i></li>
       <li className="HC_li"> <i class="fa fa-user-check"></i></li>

      
  
        </ul>
     
        </div>
        </div>
       
       
    </div>/*</a>*/
    );
    }
    
