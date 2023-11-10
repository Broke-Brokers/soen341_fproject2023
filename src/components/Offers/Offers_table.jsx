import React, { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

import {db} from '../../firebase_configuration'
import './Offers_table.css'

const Offers_table = () => {
    const [clientOffers, setClientOffers] = useState([]); // Renamed and fixed variable name
    const myCollection= collection(db,'BrokerTest');
    // Set up the collection reference
   // const clientOffersCollectionRef = collection(db, "Offers");


    useEffect(() => {
       
       //App component will run once when it loads
       onSnapshot(myCollection, (snapshot)=> {
        //snapshot.docs.maps returns all documents in our firebase
        // doc.data return the data of each document (Field & variables associated with data)
        setClientOffers(snapshot.docs.map(doc=> doc.data()))
       });
       /*
        const getClientOffer = async () => {
            const data = await getDocs(clientOffersCollectionRef);
            const offersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setClientOffers(offersData);
        };

        getClientOffer();
        */
    }, [])

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
                    {clientOffers.map(({CIDTest, IDTest,NameTest}) => (
                        <tr key={CIDTest}>
                            <td>{CIDTest}</td> {/* Assuming 'ClientID' is a field in your Firestore document */}
                            <td>{NameTest}</td> {/* Assuming 'Price' is a field in your Firestore document */}
                            <td>Pending </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Offers_table;
