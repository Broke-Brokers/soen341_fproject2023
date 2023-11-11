import React, { useState, useEffect } from "react";
import { collection, onSnapshot, updateDoc, doc} from "firebase/firestore";

import {db} from '../../firebase_configuration'
import './Offers_table.css'

const Offers_table = () => {
    const [clients, setClients] = useState([]); // Renamed and fixed variable name
    const [brokers, setBrokers] = useState ([]);
    const [offers, setOffers] = useState([]);
    const [records, setRecords] = useState([]);
   const [offerStatus, setOfferStatus] = useState("");
    const brokerCollectionRef= collection(db,'Broker');
    const ClientCollectionRef = collection (db,'Client');
   const offersCollectionRef = collection(db, "Offers");
   let brokeremail = "isa@gmail.com";

    useEffect(() => {
       
        const getbrokers = async ()=>{
       //App component will run once when it loads
       onSnapshot(brokerCollectionRef, (snapshot)=> {
        //snapshot.docs.maps returns all documents in our firebase
        // doc.data return the data of each document (Field & variables associated with data)
        setBrokers(snapshot.docs.map(doc=> doc.data()))
       });
    };


    const getClients = async ()=>{
        onSnapshot(ClientCollectionRef,(snapshot)=>{
            setClients(snapshot.docs.map(doc=>doc.data()))
        });

    };

    const getOffers = async ()=>{
        onSnapshot(offersCollectionRef,(snapshot)=>{
            setOffers(snapshot.docs.map(doc=>doc.data()))
        });

    };

    getbrokers();
    getClients();
    getOffers();
        
    }, [])





const answerSelect=async (event)=>{
    setOfferStatus(event.target.value);
    const updateData = doc (db,"Offers",offerID)

    await updateData(updateData,{
        OfferStatus: offerStatus
    });
  }


    return (
        
        <div className="app-container">
            <h1>Offer sent</h1>
            <table>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Offer Price ($)</th>
                        <th>Offer Status</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.filter(offer=> offer.BrokerID_transmitter === brokeremail).map((option) => (
                        <tr key={option.ClientName}>
                            <td>{option.ClientName}</td> 
                            <td>{option.Price}</td> 
                            <td>{option.OfferStatus} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            
            <h1>Offer received </h1>
            <table>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Offer Price ($)</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.filter(offer=> offer.BrokerID_receiver === brokeremail).map((option) => (
                        <tr key={option.ClientName}>
                            <td>{option.ClientName}</td> 
                            <td>{option.Price}</td> 
                            <td>
                                <select className="selection" onChange={answerSelect}>
                                    <option defaultValue="Pending"> Pending </option>
                                    <option value = "Accepted">Accepted</option>
                                    <option value = "Refused">Refused</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default Offers_table;
