import React from 'react'
//import Add_Button from './components/buttons/Add_Button'

import Creation_Property from '../components/Profile-page/Creation_Property'
import Admin_Brokers_Grid from '../components/Profile-page/Admin_Brokers_Grid';
//import Crud_broker_result_gallery from './components/Profile-page/CrudBrokers/Crud_broker_result_gallery'

//import Profile from '../Profile'
import Card_home from './components/search-page/Card_home';



function Profile() {
  return (

    <div>
    
      <Creation_Property/>

      <Card_home/>

      <Admin_Brokers_Grid/>
      
      
    </div>

  )
 

}

export default Profile
