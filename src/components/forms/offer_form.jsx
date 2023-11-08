import React from 'react'
import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, doc, getDocs, addDoc, updateDoc} from "firebase/firestore";
import './OfferForm.css'
function OfferForm() {
  let brokerid = 1; 

  
  const [Clients, setClients] = useState([]);
  const [Offers, setOffers] = useState([]);
  const ClientCollectionRef = collection(db, "Client")
  const OffersCollectionRef = collection(db, "Offers")
  const [records, setRecords] = useState([])
  

  const[getBrokerID_receiver, setBrokerID_receiver]= useState(0)
  const[getBrokerID_transmitter, setBrokerID_transmitter]= useState(0)
  const[getClientID, setClientID]= useState(0)
  //const[getOfferID, setOfferID]= useState("")
  const[getPrice, setPrice]= useState("")



  useEffect(() => {

    const getClients = async () => {
      const data = await getDocs(ClientCollectionRef);
      setClients(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setRecords(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
     
  
    };
    const getOffers = async () => {
      const data = await getDocs(OffersCollectionRef);
      setOffers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
  
    };

    getOffers();
    getClients();
  }, []);
  

  const createOffers = async()=>{
    await addDoc(OffersCollectionRef,{
      BrokerID_receiver: getBrokerID_receiver,
      BrokerID_transmitter: getBrokerID_transmitter,
      ClientID: getClientID,
      //OfferID:getOfferID,
      Price:getPrice
      
      
    });

    }




const ClientSelect=(event)=>{
  setClientID(event.target.value)

}


  return (
    <div className='bodyoffer'>
      <div className='containtoffer'>
     <div className='leftPart'>

     </div>
     
     <div className='rightpart'>
     <select className='selection' onChange={ClientSelect} >
        <option  value = "" >clients </option>
     { Clients.filter(f=> f.BrokerID== brokerid).map(option=>(
        <option value={option.ClientID}>{ option.UserID}</option>

      ))}
      </select>
      <label className='labelUserEmail'>Your email <em>&#x2a;</em></label>
      <input className='user_email' type="email" placeholder="Email"   
       onChange={(event)=> {
        setBrokerID_transmitter(event.target.value);
    }} required />

      <label className='labelUserEmail'>Other Broker email <em>&#x2a;</em></label>
      <input className='otherEmail' type="email" placeholder="Other Broker email" name="user_email" 
      onChange={(event)=> {
        setBrokerID_receiver(event.target.value);
    }} required />

      <label className='labelPrice'>Price <em>&#x2a;</em></label>
      <input className='inputPrice' type="price" placeholder="Price" name="user_email" 
      onChange={(event)=> {
        setPrice(event.target.value);
    }} required />

      <label className='labelComment'>Comment <em>&#x2a;</em></label>
      <textarea className='textareaComment' name="message" required="" rows="4" ></textarea>

      <button className='SubmitButtonBroker' onClick={createOffers}>submit</button>
     </div>
     </div>
    </div>
  );
}

export default OfferForm
