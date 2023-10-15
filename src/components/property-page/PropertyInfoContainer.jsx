import React from 'react'
import PropertyInfo from '../property-page/PropertyGallery'
import '../property-page/PropertyInfoContainer.css' 

export default function PropertyInfo(props){

   /*const price = props.price;
   const postName = props.postName;
   const constructionYear = props.constrcutionYear;
    */

   /*For testing purposes these are hardcoded, please remove after testing*/
    const price = 12345;
   const postName = "postName";
   const constructionYear = 1966;
      
    return(
        <div className="propertyContainer">
         {/**Css of photoContainer and photochontainer will need to be mode to a photo component. */}
      <div className="photoContainer">
      <img src={home_photo} alt=''/>
      </div>
    <PropertyInfo/>
    </div>
    );
    }
    