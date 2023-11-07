import React from 'react'
import home_photo from '../../Images/property_image_test1.jpg'
import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, getDocs, deleteDoc} from "firebase/firestore";
import Add_Button from '../../components/buttons/Add_Button';
import Creation_Property from '../Profile-page/Creation_Property';
import { doc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import Home_card from './Home_card';


function Card_home() {

    const [Properties, setProperties] = useState([]);
    const PropertiesCollectionRef = collection(db, "Properties")
    const [records, setRecords] = useState([])
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
        setRecords(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
       
    
      };
  
      getProperties();
    }, []);

    const Filter = (event)=>{
      setRecords(Properties.filter((f)=>
      {return f.Province && f.Province.toLowerCase().includes(event.target.value)}))
    }
  return (
    <div className="house_container">
      {/* Render the component for each result in the array */}
      <input id="searchInput1" type="text" placeholder="Search here..."  onChange={Filter}/>
      {records.map((Property) => (
        <Home_card  Propertylist={Property} /> // Use a unique 'key' prop for each element
      ))}
    </div>
    
        );
  
}

export default Card_home

