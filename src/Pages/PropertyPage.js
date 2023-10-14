import React from 'react'
import '../App.css' 
import '../components/PropertyGallery.css' 
import Card from '../components/Card';
import PropertyGallery from '../components/PropertyGallery';
import home_photo from '../Images/property_image_test1.jpg'

function PropertyPage() {
  return (
    <section>
    <div className="">

     
      <div className="photoContainer">
      <img src={home_photo} alt=''/>
      </div>
      <>
      <PropertyGallery/>
      </>
    </div>
    </section>
  )
}

export default PropertyPage
