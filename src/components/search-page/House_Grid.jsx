import React from 'react';
import House_Card from './House_Card';




export default function House_Grid() {
    // An array to represent the number of houses to display
    // Each item in this array represents a house
    const houses = [1, 2, 3,4,5,6,7,8,9]; // ...as many wanted

    return (
        <div className="house-grid-container">
            {/* Render the House_Card component for each house in the houses array */}
            {houses.map((house, index) => (

        /*<Link to="/propertyPage">
        <House_Card key={index} />
        </Link>*/
                    <House_Card key={index} />
        
                

            ))}
        </div>
    );
    
}


