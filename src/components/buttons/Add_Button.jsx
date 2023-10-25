
import React from 'react';
import './Add_Button.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  function add(){
    alert("This opens a form to add ___");
  }
 


export default function Add_Button(){
  
    return(
        <div>
{/*<i class="fa-solid fa-plus" style="color: #D2D2D2;"></i>*/}
<button className="addButton" onClick={add}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>

</div>
    );

    }
