import React from 'react'
import House_Grid from '../components/search-page/House_Grid'
import Search_Filter from '../components/search-page/Search_Filter'
import {useState, useEffect} from "react";
import {db} from '../firebase_configuration.js'
import { collection, getDocs} from "firebase/firestore";

function Search() {

  const [Properties, setProperties] = useState([]);
  const PropertiesCollectionRef = collection(db, "Properties")


  useEffect(() => {

    const getProperties = async () => {
      const data = await getDocs(PropertiesCollectionRef);
      setProperties(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  
    };

    getProperties();
  }, []);
  return (
    <div> 
      {Properties.map((Property) => {
          return (
            <div>
              {" "}
              <h1> Prix: {Property.Price}</h1>
              <h1> Adresse: {Property.Adress} </h1>
              </div>
          );


      })}
    
     <Search_Filter/>
     <House_Grid/>
    </div>
  );
}

export default Search

{/**From user story : https://github.com/Broke-Brokers/Broke_BRokers-soen341projectF2023/issues/124 */}