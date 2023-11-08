import React from 'react'
import'../search-page/House_Card.css';
import home_photo from '../../Images/property_image_test1.jpg'
import Creation_Property from '../Profile-page/Creation_Property';
import {useState, useEffect} from "react";
import { collection, getDocs, addDoc, updateDoc} from "firebase/firestore";
import {db} from '../../firebase_configuration.js'
import { doc } from "firebase/firestore";
import { deleteDoc} from "firebase/firestore";

 export default function Home_card({Propertylist}) {



  const [Properties, setProperties] = useState([]);
  const PropertiesCollectionRef = collection(db, "Properties")
  const [editProperty, seteditProperty] = useState(false)

  const [newPropertyType, setNewPropertyType] = useState("")
  const [newListingType, setNewListingType] = useState("")
  const [newPrice, setNewPrice] = useState("") 
  const [newAdress, setNewAdress] = useState(0)
  const [newCity, setNewCity] = useState("")
  const [newProvince, setNewProvince] = useState("")
  const [newNeighborhood, setNewNeighborhood] = useState("")
  const [newBedrooms, setNewBedrooms] = useState(0)
  const [newNBathrooms, setNewNBathrooms]= useState(0)
  const [id, setid] = useState('')


  const editTEST = async(id, PropertyType, ListingType,
    Price, Adress, City,Province,
    Neighborhood, Bedrooms, Bathrooms) => {

{/*setNewPropertyType(PropertyType)
setNewListingType(ListingType)
setNewPrice(Price)
setNewAdress(Adress)
setNewCity(City)
setNewProvince(Province)
setNewNeighborhood(Neighborhood)
setNewBedrooms(Bedrooms)
setNewNBathrooms(Bathrooms)
    setid(id)*/
   }
   console.log(Price)
    }


 
  
    const deleteProperty = async (id) => {
      const PropertyDoc = doc(db, "Properties", id);
      await deleteDoc(PropertyDoc);
  };


  return (
    <>
    <div className='propertiesCards'>
   
       
          
          
     <div className="HC_infoContainer">

            
     <div className="HC_photoContainer">
     <img src={home_photo} alt=''/>
     </div>
   <div className="HC_InfoBox">
       <h1 className="HC_price">{Propertylist.Price}$</h1>
       <h1 className="HC_PropertyListing">{Propertylist.PropertyListing}</h1>
       <h2 className="HC_postname">{Propertylist.PropertyType}</h2>
       <p className="HC_details">{Propertylist.Adress}, {Propertylist.City}, {Propertylist.Province}</p>
       <p className="HC_details">{Propertylist.Neighborhood}</p>
       
       
       <div className="HC_iconSection">
           <ul className="HC_ul">
   <li className="HC_li"><i class="fa fa-bed"></i> {Propertylist.Bedrooms}</li>
      <li className="HC_li"><i class="fa fa-bath"></i>  {Propertylist.Bathrooms}</li>
      <li className="HC_li"><i class="fa fa-bookmark"></i></li>
      <li className="HC_li"> <i class="fa fa-user-check"></i></li>
      <button onClick={() => {deleteProperty(Propertylist.id)}}>
                      Delete
  </button>
     
              <button onClick={ () => editTEST(Propertylist.id, Propertylist.PropertyType, Propertylist.ListingType, Propertylist.Price,
                Propertylist.Adress, Propertylist.City, Propertylist.Province, Propertylist.Neighborhood, Propertylist.Bedrooms, Propertylist.Bathrooms)}> Edit</button>
             
          
                 
       </ul>
       </div>
       </div>
      
      
   </div>
  
     


   
    </div>
    </>
    );
              }
