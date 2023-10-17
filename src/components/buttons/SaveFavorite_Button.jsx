import React from 'react';
import './SaveFavorite_Button.css'; 


  function saveToFavorite(){
    alert("This property was added to your favorite list!");
  }
 


export default function SaveFavorite_Button(){
  
    return(
        <div>

            {/*The saveTo favorite function will need to have a logical test to know if it's a broker or a homebuyer!*/}
<button className="saveButton" onClick={saveToFavorite}><div className="buttonText">Save to favorite</div></button>
</div>
    );

    }
