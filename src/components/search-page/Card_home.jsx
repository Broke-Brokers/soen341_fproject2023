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
import '../search-page/Card_home.css' 
import { Range } from 'react-range';

function Card_home() {

    const [Properties, setProperties] = useState([]);
    const PropertiesCollectionRef = collection(db, "Properties")
    const [records, setRecords] = useState([])
    const [showPriceDropdown, setShowPriceDropdown] = useState(false);
    const [values, setValues] = useState([0, 1000]);
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [showFilterModal, setShowFilterModal] = useState(false);

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
      {return f.City && f.City.toLowerCase().includes(event.target.value)}))
    }
    const Filter_rent_sell = (event)=>{
      setRecords(Properties.filter((f)=>
      {
        if (event.target.value=="all"){
        return f
        }
        if (event.target.value=="sale"){
          return f.PropertyType && f.PropertyType.toLowerCase().includes("single")
        }
        if (event.target.value=="rent"){
            return f.PropertyType && f.PropertyType.toLowerCase().includes("quadruplex")
        }

      }))
    
    }

    const Filter_price = (event)=>{
      setRecords(Properties.filter((f)=>
      {
        
          return f.Price >= values[0] && f.Price <= values[1];
        

      }))
    
    }

    const Filter_bed_bath = (event)=>{
      setRecords(Properties.filter((f)=>
      {
        
          return f.Bedrooms >= bedrooms && f.Bathrooms >= bathrooms;
        

      }))
    
    }
    const handlePriceConfirm = () => {
      // Here you can perform any action you need when the user confirms their price range
      console.log('Price range confirmed:', values);
      Filter_price();
      // Then close the price dropdown
      setShowPriceDropdown(false);
    };
    const handleFilterApply = () => {
      // Process your filter data here
      console.log("Filters applied:", { bedrooms, bathrooms});
      // Hide the filter modal
      Filter_bed_bath();
      setShowFilterModal(false);
    };

    const handleInputChange = (event) => {
      const { name, value } = event.target;
    
        // For other input types, handle them accordingly
        if (name === "bedrooms") setBedrooms(value);
        if (name === "bathrooms") setBathrooms(value);
      
    };

  return (
    <div className="housecontainer">
      {/* Render the component for each result in the array */}
      <input id="searchInput1" type="text" placeholder="Search here..."  onChange={Filter}/>
      <select onChange={Filter_rent_sell} >
        <option value="all">Select type</option>
        <option value="sale">For Sale</option >
        <option value="rent">For Rent</option>
      </select>


      <div className="price-input">
        <button onClick={() => setShowPriceDropdown(!showPriceDropdown)}>
          Set Price
        </button>
        {showPriceDropdown && (
          <div className="price-dropdown">
            {/* Range component for price selection */}
            <Range
              step={10000} // Define the interval between values
              min={0}
              max={10000000}
              values={values}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                // Customize the track (line) that the handles move along
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '16px',
                    width: '100%',
                    backgroundColor: '#ccc'
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                // Customize the handles (thumbs)
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '20px',
                    width: '20px',
                    backgroundColor: '#999'
                  }}
                />
              )}
            />
            {/* Display the selected range */}
            <div className="price-range-display">
              Price range: ${values[0]} - ${values[1]}
            </div>
            {/* Confirm button */}
            <button onClick={handlePriceConfirm}>Confirm</button>
          </div>
        )}
      </div>


      <button onClick={() => setShowFilterModal(true)}>Filter</button>
    

{showFilterModal && (
  <div className="filter-modal">
     <div className="filter-content">
    <h2>Filter Properties</h2>
    </div>

    <label>
    Number of bedrooms:&nbsp;&nbsp;&nbsp;
      <input
        type="number"
        name="bedrooms"
        value={bedrooms}
        onChange={handleInputChange}
        className="smaller-input" 
      />
    </label>

    <label>
    &nbsp;&nbsp; Number of bathrooms:&nbsp;&nbsp;
      <input
        type="number"
        name="bathrooms"
        value={bathrooms}
        onChange={handleInputChange}
        className="smaller-input" 
      />
    </label>

   

    <button onClick={handleFilterApply}>Apply Filters</button>
  </div>
)}


      <div className='properties'>
      {records.map((Property) => (
        
        <Home_card  Propertylist={Property} /> // Use a unique 'key' prop for each element
      ))}
      </div>
    </div>
    
        );
  
}

export default Card_home

