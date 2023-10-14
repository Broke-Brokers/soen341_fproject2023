import React from 'react'
import '../App.css' 
import '../components/PropertyGallery.css' 
import Card from '../components/Card';
import PropertyGallery from '../components/PropertyGallery';
import home_photo from '../Images/property_image_test1.jpg'

function PropertyPage() {
  return (
    <div className="headerGalleryContainer">
      <h1>Take a closer look at this property!</h1>
      <p>this is a test</p>
      <>
      <PropertyGallery/>
      </>
    </div>
  )
}

export default PropertyPage
