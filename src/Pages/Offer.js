import React from "react";
import Offers_table from "../components/Offers/Offers_table";
import Offers_table_received from "../components/Offers/Offers_table_received";

function Offer(){
   
    return (
        <div> 
    
    <h1>Offer sent</h1>
    <Offers_table/>
   
    <h1>Offer received</h1>
    <Offers_table_received/>

    </div>
   
    )

}
export default Offer