import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-lg z-50">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Edmonitor" className="h-10 w-auto" />
        <div className="hidden md:flex space-x-4">
          <Link to="/" className=" font-poppins font-semibold text-purple-800 hover:bg-purple-700 hover:text-white transition-colors duration-200 px-2 py-1 rounded ">Home</Link>
          <Link to="/blog" className="font-poppins font-semibold text-purple-800 hover:bg-purple-700 hover:text-white transition-colors duration-200 px-2 py-1 rounded">Blog</Link>
          <Link to="/sobre" className="font-poppins font-semibold text-purple-800 hover:bg-purple-700 hover:text-white transition-colors duration-200 px-2 py-1 rounded">Sobre</Link>
        </div>
      </div>
      <div className="font-poppins font-semibold">
        <Link to="/aluno-professor" className="bg-purple-700 text-white rounded-full px-4 py-2 transition-colors duration-200 hover:bg-purple-800">Login</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-4 text-center">
            <Link
              to="/"
              className="text-purple-800 hover:bg-purple-700 hover:text-white transition-colors duration-200 text-xl"
              onClick={toggleMenu} // Fecha o menu ao clicar
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-purple-800 hover:bg-purple-700 hover:text-white transition-colors duration-200 text-xl"
              onClick={toggleMenu} // Fecha o menu ao clicar
            >
              Blog
            </Link>
            <Link
              to="/sobre"
              className="text-purple-800 hover:bg-purple-700 hover:text-white transition-colors duration-200 text-xl"
              onClick={toggleMenu} // Fecha o menu ao clicar
            >
              Categoria
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-purple-800 text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
