// App.js
import React from 'react';
import CustomNavbar from './components/Navbar';
import LocationForm from './components/LocationForm';
import StoreListings from './components/StoreListings';
import CardGrid from './components/CardGrid';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <LocationForm />
      <StoreListings />
      <CardGrid />
      {/* Add more components as needed */}
    </div>
  );
};

export default App;

