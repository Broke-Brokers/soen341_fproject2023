import React from 'react'
import'../property-page/PropertyInfo.css';
import home_photo from '../../Images/property_image_test1.jpg'



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

        <div className="infoContainer">

            {/**Css of photoContainer and photochontainer will need to be mode to a photo component. */}
      <div className="photoContainer">
      <img src={home_photo} alt=''/>
      </div>
    <div className="propertyInfoBox">
        <h1>{price}$</h1>
        <h2>{postName}</h2>
        <p>{constructionYear}</p>
        <p>{constructionYear}</p>
        <p>{constructionYear}</p>
        </div>
    </div>
    );
    }
    
