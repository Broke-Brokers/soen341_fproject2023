import React from 'react'
import '../App.css' 
import '../components/PropertyGallery.css' 
import Card from '../components/Card';
import PropertyGallery from '../components/PropertyGallery';
import PropertyInfo from '../components/PropertyInfo';
import home_photo from '../Images/property_image_test1.jpg'


function PropertyPage() {
  return (
    
    
<>
<div>
      <div className="photoContainer">
      <img src={home_photo} alt=''/>
      </div>
    
      <PropertyGallery/>
   
   <div className="propertyInfo_containter">
      <PropertyInfo/></div>
    
 
    </div>
    </>
 
  )
}

export default PropertyPage
