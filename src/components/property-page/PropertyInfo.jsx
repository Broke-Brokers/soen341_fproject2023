import React from 'react'
import'../property-page/PropertyInfo.css';
import home_photo from '../../Images/property_image_test1.jpg'
import SaveFavorite_Button from '../buttons/SaveFavorite_Button';
import RequestVisit_Button from '../buttons/RequestVisit_Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Request_visit2 from '../forms/Request_visit2';
import { Link } from 'react-router-dom';

export default function PropertyInfo(props){


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

        <div className="infoContainer">

            {/**Css of photoContainer and photochontainer will need to be moved to a photo component. */}
      <div className="photoContainer">
      <img src={home_photo} alt=''/>
      </div>
    <div className="propertyInfoBox">
        <h1>{price}$</h1>
        <h2>{postName}</h2>
        <p>{Adress}, {City}, {Province}</p>
        <p>{Neghborhood}</p>
        
        <p><i class="fa fa-bed"></i> Number of bedrooms: {No_Bedrooms}</p>
       
        <p><i class="fa fa-bath"></i> Number of bathrooms: {No_bathrooms}</p>
      
        </div>
        <SaveFavorite_Button/>
        <Link to='/requestVisitForm'>
        <RequestVisit_Button/>
        </Link>
        
       <div >

        {/*We would need to style the pop up if we use this method https://react-popup.elazizi.com/css-styling/ */}
        <Popup trigger={<img className="requestButton" src={require('../../Images/home_visit.png')} alt="requestAVisit" /*onClick={() => requestAVistit()}*/ />} position="right center">
    <div><Request_visit2 /></div>
          </Popup>
    

          
        </div>
    </div>
    );
    }
    
    /*const requestAVistit= () => {
      /*<Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here 1!!</div>
  </Popup>
    }*/

    