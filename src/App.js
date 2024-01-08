// App.js
import React from 'react';
import CustomNavbar from './components/Navbar';
import LocationForm from './components/LocationForm';
import StoreListings from './components/StoreListings';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <LocationForm />
      <StoreListings />
      {/* Add more components as needed */}
    </div>
  );
};

export default App;

