import React from 'react'
import Add_Button from './components/buttons/Add_Button'
import Broker_Offer_Grid from './components/Profile-page/Broker_Offer_Grid' //Broker_Offer_Grid
import Admin_Brokers_Grid from './components/Profile-page/Admin_Brokers_Grid'

function Profile() {
  return (
    <div>

            {/*====FOR SYTEM ADMIIN======*/}

        {/*The + button is at the top left corner of the page */}
        {/*brokers showed alphabetically*/}
        {/*click on card : edit button is a pen*/}
         {/*click on card delete button  is a trash*/}

         
      <Broker_Offer_Grid/>
    <Admin_Brokers_Grid/>
      
    
    
    </div>
  )
}

export default Profile
