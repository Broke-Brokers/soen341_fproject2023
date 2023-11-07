import React from 'react'
import'../search-page/House_Card.css';
import home_photo from '../../Images/property_image_test1.jpg'

export default function Home_card({Propertylist}) {
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
      {/*<button onClick={() => {deleteProperty(Propertylist.id)}}>
                      Delete
  </button>*/}
                 
       </ul>
       </div>
       </div>
      
      
   </div>
  
     


   
    </div>
    </>
    );
  
}
