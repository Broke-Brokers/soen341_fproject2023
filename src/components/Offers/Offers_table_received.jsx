import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase_configuration.js';
import './Offers_table_received.css'

const Offers_table_received = () => {
    const [clientOffers, setClientOffers] = useState([]); // Renamed and fixed variable name

    // Set up the collection reference
    const clientOffersCollectionRef = collection(db, "Offers");

    useEffect(() => {
        const getClientOffer = async () => {
            const data = await getDocs(clientOffersCollectionRef);
            const offersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setClientOffers(offersData);
        };

        getClientOffer();
    }, [clientOffersCollectionRef]); // Added dependency to prevent unnecessary re-renders

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
                    {clientOffers.map((offer) => (
                        <tr key={offer.id}>
                            <td>{offer.ClientID}</td> {/* Assuming 'ClientID' is a field in your Firestore document */}
                            <td>{offer.Price}</td> {/* Assuming 'Price' is a field in your Firestore document */}
                            <td>Pending </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Offers_table_received;
