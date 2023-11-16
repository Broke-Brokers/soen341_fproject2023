import React from 'react'
import '../App.css' 
import Card from '../components/Card';
import BrokerCard from '../components/property-page/BrokerCard';
import PropertyGallery from '../components/property-page/PropertyGallery';
import PropertyInfo from '../components/property-page/PropertyInfo';
import MortgageCalculator from '../components/property-page/MortgageCalculator';

function PropertyPage() {
    return(
<>
<PropertyGallery/>
   <div>
      <PropertyInfo/>
      <BrokerCard/>
      <MortgageCalculator/>
      </div>
      <div>
  
  </div>
    
    </>
   
);
}
export default PropertyPage
