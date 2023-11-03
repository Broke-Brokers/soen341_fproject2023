import React from 'react';
import './RequestVisit_Button.css'; 



/*const requestAVistit= () => {
    alert("Here is the contact form for the request visit button");
  }*/
  

export default function RequestVisit_Button(){
  
    return(
        <div >
<img className="requestButton" src={require('../../Images/home_visit.png')} alt="requestAVisit" /*onClick={() => requestAVistit()} *//>

          
</div>
    );

    }


 