import React from "react";
import Add_Button from '../../components/buttons/Add_Button'
import {useState, useEffect} from "react";
import {db} from '../../firebase_configuration.js'
import { collection, getDocs, addDoc, updateDoc} from "firebase/firestore";
import './Creation_Property.css';
import {PropertiesCollectionRef} from './Creation_Property';

function Edit_home() {

    function editDoc(updatedDoc) {
        PropertiesCollectionRef.doc(updatedDoc.id).update(updatedDoc)
        .catch((err) => {
            alert(err)
            console.error(err);
        })
    }

    return (
        <div>
            <h1>hi</h1>
        </div>
    )
} 

export default Edit_home