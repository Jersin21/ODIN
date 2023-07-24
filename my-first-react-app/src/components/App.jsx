// App.js
import React from 'react';
import Navbar from './Navbar';

const App = () => {


  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bienvenido a nuestra tienda de ropa</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         
        </div>
      </div>
    </>
  );
};

export default App;
