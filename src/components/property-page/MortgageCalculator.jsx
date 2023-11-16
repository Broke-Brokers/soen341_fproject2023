import React from 'react';
import '../property-page/MortgageCalculator.css';
import { useState } from 'react';


export default function MortgageCalculator(){

    const [monthlyPayment, setMonthlyPayment] = useState([0]);
    
    
    //Function   to calculate the mortgage monthly payment
    // input : information from the form
    // return : monthlyPayment amount
        function calculateMortgage(){   
    setMonthlyPayment(100);
        return;
                                 }


     // component return statement
     return(

// Outter container
<div className ="mortgageCalculator_container" >

    <p>The mortgage calculator</p>


{/*the mortgage calculator form*/}
    <form >
    <div className='inputs'>
     <div className='input'>       
      <input type="" placeholder='an input' value="aValue" /> 
        </div>
         </div>

        <button type="button"  className="calculate" onClick={calculateMortgage} > Calculate</button>
</form>


<div><p>Your monthly payment : {monthlyPayment} $</p></div>
</div>

)
}