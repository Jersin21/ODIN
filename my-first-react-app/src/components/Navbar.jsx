import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Mi Sitio Web</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-blue-200">Inicio</Link>
            </li>
            <li>
              <Link to="/tienda" className="text-white hover:text-blue-200">Tienda</Link>
            </li>
            <li>
              <Link to="/carrito" className="text-white hover:text-blue-200">Carrito</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
