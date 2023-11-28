/*

import React, { useState } from 'react';
import { Range } from 'react-range';
import './Search_Filter.css'; 

function Search_Filter() {
  // State to keep track of input values
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState({ min: 0, max: 1000 }); // Assuming a range
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  // filers

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [features, setFeatures] = useState({
    pool: false,
    garage: false,
    elevator: false,
    fireplace: false,
    nearWater: false,
  });
  

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFeatures((prevFeatures) => ({
        ...prevFeatures,
        [name]: checked,
      }));
    } else {
      // For other input types, handle them accordingly
      if (name === "bedrooms") setBedrooms(value);
      if (name === "bathrooms") setBathrooms(value);
    }
  };
  
  const handleFilterApply = () => {
    // Process your filter data here
    console.log("Filters applied:", { bedrooms, bathrooms, features });
    // Hide the filter modal
    setShowFilterModal(false);
  };

  

  // Handlers for input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPrice((prevPrice) => ({
      ...prevPrice,
      [name]: value,
    }));
  };

  const handleFilterClick = () => {
    setIsDialogOpen(true);
    // Further logic for what happens when the filter is clicked can be added here
  };

  const handleFindClick = () => {
    // Logic for the "Find" operation can be added here, like calling an API or filtering a list
    console.log('Find properties', { searchTerm, propertyType, price });
  };

  const [values, setValues] = useState([0, 1000]); // Assuming a range between 0 and 1000

  // Handler for range (price) changes
  const handleRangeChange = (newValues) => {
    setValues(newValues);
  };

  // Handler for confirming the price selection
  const handlePriceConfirm = () => {
    // Here you can perform any action you need when the user confirms their price range
    console.log('Price range confirmed:', values);

    // Then close the price dropdown
    setShowPriceDropdown(false);
  };

  

  // JSX for the search bar, dropdown, price input, slider, filter, and find buttons
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={propertyType} onChange={handlePropertyTypeChange}>
        <option value="">Select type</option>
        <option value="sale">For Sale</option>
        <option value="rent">For Rent</option>
      </select>

      <div className="price-input">
        <button onClick={() => setShowPriceDropdown(!showPriceDropdown)}>
          Set Price
        </button>
        {showPriceDropdown && (
          <div className="price-dropdown">
           
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
          
            <div className="price-range-display">
              Price range: ${values[0]} - ${values[1]}
            </div>
          
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

    <fieldset>
    <div className="filter-features">
         <h2>&nbsp;&nbsp;</h2>
            </div>
  <label>
    Pool
    <input
      type="checkbox"
      name="pool"
      checked={features.pool}
      onChange={handleInputChange}
    />
  </label>
  <label>
    Garage
    <input
      type="checkbox"
      name="garage"
      checked={features.garage}
      onChange={handleInputChange}
    />
  </label>
  <label>
    Elevator
    <input
      type="checkbox"
      name="elevator"
      checked={features.elevator}
      onChange={handleInputChange}
    />
  </label>
  <label>
    Fireplace
    <input
      type="checkbox"
      name="fireplace"
      checked={features.fireplace}
      onChange={handleInputChange}
    />
  </label>
  <label>
    Near Water
    <input
      type="checkbox"
      name="nearWater"
      checked={features.nearWater}
      onChange={handleInputChange}
    />
  </label>
</fieldset>


    <button onClick={handleFilterApply}>Apply Filters</button>
  </div>
)}
            

      <button onClick={handleFindClick}>
        Find <span role="img" aria-label="magnifying glass">&nbsp;🔍</span>
      </button>
     
    </div>
  );
}

export default Search_Filter;
*/
import React from 'react';
// ... other imports

function Search_Filter() {
  // ... all your state and functions
  
  // Render nothing
  return null;
}

export default Search_Filter;