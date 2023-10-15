import React from 'react'
<<<<<<< HEAD:src/components/property-page/PropertyInfo.jsx
import '../src/components/property-page/PropertyInfo.css' 
=======
import '../components/PropertyInfo.css' 
>>>>>>> parent of 8c30fae (created a property-page folder and broke everything.):src/components/PropertyInfo.jsx

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
    <div className="propertyInfoBox">
        <h1>{price}$</h1>
        <h2>{postName}</h2>
        <p>{constructionYear}</p>
        <p>{constructionYear}</p>
        <p>{constructionYear}</p>
        </div>
    
    );
    }
    
