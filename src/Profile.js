import React from 'react'
import Add_Button from './components/buttons/Add_Button'
import React_Grid from './components/Profile-page/React_Grid'

function Profile() {
  return (
    <div>

        {/*The + button is at the top left corner of the page */}
        {/*brokers showed alphabetically*/}
        {/*click on card : edit button is a pen*/}
         {/*click on card delete button  is a trash*/}

         
      <React_Grid/>
      <Add_Button/>
    </div>
  )
}

export default Profile
