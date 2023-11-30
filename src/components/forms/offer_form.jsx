import React from 'react'
import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, doc, getDocs, addDoc, updateDoc, onSnapshot} from "firebase/firestore";
import './OfferForm.css'
//import { option } from 'yargs';
function OfferForm() {
  let brokerid = 1; 
  
  const [Clients, setClients] = useState([]);
  const [Offers, setOffers] = useState([]);
  const [BuyerRenter_Client, setBuyerRenter_Client] = useState([]);

  const ClientCollectionRef = collection(db, "Client")
  const OffersCollectionRef = collection(db, "Offers")
  const BuyerRenterCollectionRef = collection(db, "Buyer_Renter")

  const [records, setRecords] = useState([])
  

  const[getBrokerID_receiver, setBrokerID_receiver]= useState(0)
  const[getBrokerID_transmitter, setBrokerID_transmitter]= useState(0)
  const[getClientID, setClientID]= useState(0)
  const[getOfferID, setOfferID]= useState("")
  const[getPrice, setPrice]= useState("")




  useEffect(() => {
       
    //App component will run once when it loads
    const getClients = async ()=>{
    onSnapshot(ClientCollectionRef, (snapshot)=> {
     //snapshot.docs.maps returns all documents in our firebase
     // doc.data return the data of each document (Field & variables associated with data)
     setClients(snapshot.docs.map(doc=> doc.data()));
     setRecords(snapshot.docs.map(doc=> doc.data()));
    });
  };
    const getOffers = async () => {
      onSnapshot(OffersCollectionRef, (snapshot)=> {
        //snapshot.docs.maps returns all documents in our firebase
        // doc.data return the data of each document (Field & variables associated with data)
        setOffers(snapshot.docs.map(doc=> doc.data()));
        setRecords(snapshot.docs.map(doc=> doc.data()));
       });
      
  
    };

    const getBuyerRenter = async () => {
      onSnapshot(BuyerRenterCollectionRef, (snapshot)=> {
        //snapshot.docs.maps returns all documents in our firebase
        // doc.data return the data of each document (Field & variables associated with data)
        setBuyerRenter_Client(snapshot.docs.map(doc=> doc.data()));
        setRecords(snapshot.docs.map(doc=> doc.data()));
       });
      
  
    };
  
  getClients();
  getOffers();
  getBuyerRenter();
 }, [])

/*
const FilterClient(client)=>{
setRecords(Clients.filter((c)=>
{if(c.BrokerID && brokerid)
  return c.ClientName}
))



}*/





  const createOffers = async()=>{
  
  
   const docref= await addDoc(OffersCollectionRef,{
      BrokerID_receiver: getBrokerID_receiver,
      BrokerID_transmitter: getBrokerID_transmitter,
      ClientName: getClientID,
      OfferID:getOfferID,
      OfferStatus:"",
      Price:getPrice
      
      
    })
    await updateDoc(docref,{
      DocumentID: docref.id
    })

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
        <option  value = "" > Select a client </option>
     {Clients.filter(client =>
     client.BrokerID === brokerid).map((option)=> (
     
      <option value={option.ClientName}>{option.ClientName} </option>
      ) )}
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
