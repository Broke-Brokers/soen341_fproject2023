import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import {db} from '../../firebase_configuration'
import './Offers_table.css'

const Offers_table = () => {
    const [clients, setClients] = useState([]); // Renamed and fixed variable name
    const [brokers, setBrokers] = useState ([]);
    const [offers, setOffers] = useState([]);
    const [records, setRecords] = useState([]);
    const brokerCollectionRef= collection(db,'Broker');
    const ClientCollectionRef = collection (db,'Client');
   const offersCollectionRef = collection(db, "Offers");
   let brokerid = "isa@gmail.com";

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



const FilterClient = (client)=>{
setRecords(client.filter((c)=>{
    return c.BrokerID && brokerid
}))};




    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Offer Price ($)</th>
                        <th>Offer Status</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.filter(offer=> offer.BrokerID_transmitter === brokerid).map((option) => (
                        <tr key={option.ClientName}>
                            <td>{option.ClientName}</td> 
                            <td>{option.Price}</td> 
                            <td>{option.OfferStatus} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Offers_table;
