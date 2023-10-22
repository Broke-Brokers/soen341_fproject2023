import React from 'react'
import'../search-page/House_Card.css';
import home_photo from '../../Images/property_image_test1.jpg'
import SaveFavorite_Button from '../buttons/SaveFavorite_Button';
import RequestVisit_Button from '../buttons/RequestVisit_Button';

export default function House_Card(props){


   /* The fields:
     Price integer
  Adress Varchar
  City Varchar
  Province Varchar
  Neghborhood Varchar
  No_bathrooms integer
  No_Bedrooms integer
   */     

   /*const price = props.price;
   const postName = props.postName;
   const constructionYear = props.constrcutionYear;
   const price =  props.price;
    const Adress = props.Adress;
    const City= props.City;
    const Province = props.Province;
    const Neghborhood= props.Neghborhood;
    const No_bathrooms= props.No_bathroom;
    const No_Bedrooms = props.No_Bedrooms;
   const postName = "postName";
   const constructionYear = 1966;
    */

   /*For testing purposes these are hardcoded, please remove after testing*/
    const price = 12345;
    const Adress = 1966;
    const City= "Montreal";
    const Province = "Quebec";
    const Neghborhood="Centre-Ville";
    const No_bathrooms= 2;
    const No_Bedrooms = 5;
   const postName = "postName";
   const constructionYear = 1966;
 
    return(

        <a href="/propertypage"><div className="HC_infoContainer">

            
      <div className="HC_photoContainer">
      <img src={home_photo} alt=''/>
      </div>
    <div className="HC_InfoBox">
        <h1 className="HC_price">{price}$</h1>
        <h2 className="HC_postname">{postName}</h2>
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
       
       
    </div></a>
    );
    }
    
