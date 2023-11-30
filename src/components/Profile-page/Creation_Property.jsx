import React from "react";
import Add_Button from '../../components/buttons/Add_Button'
import {useState, useEffect} from "react";
import { collection, doc, getDocs, addDoc, updateDoc, onSnapshot} from "firebase/firestore";
import './Creation_Property.css';
import { Link } from 'react-router-dom'; 
import Home_card from '../search-page/Home_card';
import House_Grid from "../search-page/House_Grid.jsx";
import House_Card from "../search-page/House_Card";
import { db } from "../../firebase_configuration.js";



function Creation_Property()  {



  //===========================================================

  const [selectedProperty, setSelectedProperty] = useState(null);

  // Function to handle the edit click, sets the selected property for editing
  const handleEditClick = (property) => {
      setSelectedProperty(property);
      // Set form fields with the selected property's data
      setNewPropertyType(property.PropertyType);
      setNewListingType(property.ListingType);
      setNewPrice(property.Price);
      setNewAdress(property.Adress);
      setNewCity(property.City);
      setNewProvince(property.Province);
      setNewNeighborhood(property.Neighborhood);
      setNewBedrooms(property.Bedrooms);
      setNewNBathrooms(property.Bathrooms);
      setid(property.DocumentID); // Assuming 'id' is used to track the document ID
  };


  const handleUpdateProperty = async () => {
    if (selectedProperty) {
        const propertyDocRef = doc(db, "Properties", selectedProperty.DocumentID);
        const updatedData = {
            PropertyType: newPropertyType,
            ListingType: newListingType,
            Price: newPrice,
            Adress: newAdress,
            City: newCity,
            Province: newProvince,
            Neighborhood: newNeighborhood,
            Bedrooms: newBedrooms,
            Bathrooms: newNBathrooms
        };
        await updateDoc(propertyDocRef, updatedData);
        setSelectedProperty(null); // Clear the selection after updating
    }
};





  //======================================================

    const [editProperties, seteditProperties] = useState(false)
    const [Properties, setProperties] = useState([]);
    const PropertiesCollectionRef = collection(db, "Properties")    
  
    //READ SNAPSHOF FIREBASE TO ENSURE CRUD WORKS
    //GET ALL THE PROPERTIES STORE IN FIREBASE
    async function getProperties()
    {
      onSnapshot(PropertiesCollectionRef, (snapshot)=>{
        setProperties(snapshot.docs.map(doc=>doc.data()));
      })
    }

    useEffect(()=>{
      getProperties()
    },[])

    console.log("Content of Properties array in creation property: ", Properties)








    //FOR CRUD
    //VARIABLES TO CREATE NEW PROPERTY
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
  
    const createProperty = async () => {
  
        // To add the fetch values to the database
     const docref= await addDoc( PropertiesCollectionRef, { 
        PropertyType: newPropertyType, 
        ListingType: newListingType,
        Price: newPrice,  Adress: newAdress, City: newCity, 
        Province: newProvince, Neighborhood: newNeighborhood,
        Bedrooms: newBedrooms, Bathrooms: newNBathrooms   })


        await updateDoc(docref,{
          DocumentID:docref.id
        })
  
    }

    const editProperty = async(id, PropertyType, ListingType,
                                Price, Adress, City,Province,
                                Neighborhood, Bedrooms, Bathrooms) => {

              setNewPropertyType(PropertyType)
              setNewListingType(ListingType)
              setNewPrice(Price)
              setNewAdress(Adress)
              setNewCity(City)
              setNewProvince(Province)
              setNewNeighborhood(Neighborhood)
              setNewBedrooms(Bedrooms)
              setNewNBathrooms(Bathrooms)
              setid(id)
        
                                }
    
    const handleEdit = async() => {
          const updateData = doc(db,"Properties", id )
          await updateDoc(updateData, {Price: newPrice} )
    }                          
  
    return (

 <> 

      <div className="container-profile">
    
        <input placeholder ="Property type..." 
        
        onChange={(event) => {
        setNewPropertyType(event.target.value);
    
          }}
         />
    
    <br />
          
      <input placeholder ="Listing type..." 
        
        onChange={(event) => {
        setNewListingType(event.target.value);
    
          }}
         />
    
    <br />
    
        <input type = "number" placeholder ="Price..." 
        
          onChange={(event) => {
          
          setNewPrice(event.target.value);
        
          }}
        /> 
      
          <br />
    
        
    
        <input placeholder ="Adress..." 
        
          onChange={(event) => {
          
          setNewAdress(event.target.value);
        
          }}
        />
    
          <br />
    
         <input placeholder ="City..." 
        
          onChange={(event) => {
           setNewCity(event.target.value);
      
            }}
          />
    
    <br />
    
        <input placeholder ="Province..." 
    
          onChange={(event) => {
          setNewProvince(event.target.value);
    
           }}
          />
    
    <br />
    
        <input placeholder ="Neighborhood..." 
    
          onChange={(event) => {
          setNewNeighborhood(event.target.value);
    
           }}
          />
        
       <br />
    
       <input placeholder ="No of Beds..." 
    
        onChange={(event) => {
        setNewBedrooms(event.target.value);
    
          }}
        />
    
    <br />
        <input placeholder ="No of Baths..." 
        
        onChange={(event) => {
        setNewNBathrooms(event.target.value);
    
          }}
        />
    
    <br />
        <button onClick={createProperty}> Create Property</button>
        <button onClick = {handleEdit} > Edit Property </button>

        
         {/*editProperties === true && <Edit_home /> */}
         
    
                {/*====FOR SYTEM ADMIIN======*/}
    
            {/*The + button is at the top left corner of the page */}
            {/*brokers showed alphabetically*/}
            {/*click on card : edit button is a pen*/}
             {/*click on card delete button  is a trash*/}
    
             
     
          
        
        </div>

        <div className="Property gallery">
                {Properties.map((property, index) => (
                    <House_Card key={index} property={property} onEditClick={handleEditClick} />
                ))}
            </div>
            
        {selectedProperty && (
                <div className="ModifyBrokerForm">
                    <h3>Modify Property</h3>
                    <input type="text" value={newPropertyType} onChange={(e) => setNewPropertyType(e.target.value)} placeholder="Property Type" />
                    <input type="text" value={newListingType} onChange={(e) => setNewListingType(e.target.value)} placeholder="Listing Type" />
                    <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="Price" />
                    <input type="text" value={newAdress} onChange={(e) => setNewAdress(e.target.value)} placeholder="Adress" />
                    <input type="text" value={newCity} onChange={(e) => setNewCity(e.target.value)} placeholder="City" />
                    <input type="text" value={newProvince} onChange={(e) => setNewProvince(e.target.value)} placeholder="Province" />
                    <input type="text" value={newNeighborhood} onChange={(e) => setNewNeighborhood(e.target.value)} placeholder="Neighborhood" />
                    <input type="number" value={newBedrooms} onChange={(e) => setNewBedrooms(e.target.value)} placeholder="No of Beds" />
                    <input type="number" value={newNBathrooms} onChange={(e) => setNewNBathrooms(e.target.value)} placeholder="No of Baths" />
                    <button onClick={handleUpdateProperty}>Update Property</button>
                </div>
            )}
            
          
        </>
)

}

export default Creation_Property