import React from 'react';
import Creation_Property from '../components/Profile-page/Creation_Property';
import Admin_Brokers_Grid from '../components/Profile-page/Admin_Brokers_Grid';
import Cookies from 'js-cookie';

function Profile() {
  // Retrieve user type from the cookie
  const userType = Cookies.get('usertypeID');

  return (
    <div>
      {userType === 'broker' && (
        // Render this component only if the user is a broker
        <Creation_Property />
      )}

      {userType === 'system_admin' && (
        // Render this component only if the user is an admin
        <Admin_Brokers_Grid />
      )}
    </div>
  );
}

export default Profile;
