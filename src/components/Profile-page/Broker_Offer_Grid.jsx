import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import './Broker_Offer_Grid.css'
import { EditingState, SearchState, IntegratedFiltering } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  Toolbar,
  SearchPanel,
} from '@devexpress/dx-react-grid-material-ui';

const defaultColumnValues = {
  id: ({ index }) => index, // for example, generating IDs based on index
  // ... other columns with default values or generator functions
};

// Define getRandomInt within your file
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function generateRows({
  columnValues = defaultColumnValues,
  length,
}) {
  const rows = [];

  for (let index = 0; index < length; index++) {
    const row = {};

    // Renaming 'id' to 'propertyId'
    row['propertyId'] = index; // direct assignment since it's always based on index

    Object.keys(columnValues).forEach(columnKey => {
      const generator = columnValues[columnKey];
      if (typeof generator === 'function') {
        row[columnKey] = generator({ index, random: Math.random, getRandomInt });
      } else {
        row[columnKey] = generator;
      }
    });

    rows.push(row);
  }

  return rows;
}

export const realEstateValues = {
  price: ({ random }) => `$${(random() * 1000000).toFixed(2)}`, // Random prices up to $1,000,000.00
  address: () => ['123 Maple Road', '456 Pine Avenue', '789 Birch Street'][getRandomInt(0, 2)], // Selects a random address
  city: () => ['Toronto', 'Vancouver', 'Montreal'][getRandomInt(0, 2)], // Selects a random city
  province: () => ['ON', 'BC', 'QC'][getRandomInt(0, 2)], // Selects a random province
  neighborhood: () => ['Downtown', 'Midtown', 'Suburbs'][getRandomInt(0, 2)], // Selects a random neighborhood
  noOfBathrooms: ({ random }) => Math.floor(random() * 5) + 1, // 1-5 bathrooms
  noOfBedrooms: ({ random }) => Math.floor(random() * 5) + 1, // 1-5 bedrooms
  propertyType: () => ['House', 'Apartment', 'Condo'][getRandomInt(0, 2)], // Selects a random property type
  listingType: () => ['Sale', 'Rent'][getRandomInt(0, 1)], // Selects a random listing type
  propertyStatus: () => ['Available', 'Sold', 'Rented'][getRandomInt(0, 2)], // Selects a random property status
};




const getRowId = row => row.id;

export default () => {

  const [columns] = useState([
    { name: 'propertyId', title: 'Property ID' }, 
    { name: 'price', title: 'Price' },
    { name: 'address', title: 'Address' },
    { name: 'city', title: 'City' },
    { name: 'province', title: 'Province' },
    { name: 'neighborhood', title: 'Neighborhood' },
    { name: 'noOfBathrooms', title: 'No of Bathrooms' },
    { name: 'noOfBedrooms', title: 'No of Bedrooms' },
    { name: 'propertyType', title: 'Property Type' },
    { name: 'listingType', title: 'Listing Type' },
    { name: 'propertyStatus', title: 'Property Status' },
  ]);
  

  const [rows, setRows] = useState(generateRows({
    columnValues: { id: ({ index }) => index, ...realEstateValues }, // using realEstateValues here
    length: 10, // how  many rows 
  }));
  

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter(row => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (

    
    <Paper className="myPaper">
      
      <h2 className ="title_grid">MY HOUSE OFFERS LISTINGS</h2>

      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <SearchState />
        <IntegratedFiltering />
        <EditingState
          onCommitChanges={commitChanges}
        />
        <Table />
        <TableHeaderRow />
        <TableEditRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
          showDeleteCommand
        />
        <Toolbar />
        <SearchPanel />
      </Grid>
    </Paper>
  );
};
