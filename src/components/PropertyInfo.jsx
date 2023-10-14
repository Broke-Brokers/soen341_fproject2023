import React from 'react'

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
    <div >
        <h1>{price}$</h1>
        <h2>{postName}</h2>
        <p>{constructionYear}</p>
        </div>
    
    );
    }
    
