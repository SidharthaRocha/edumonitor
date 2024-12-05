import React from 'react';
import LogoSemFundo from '../assets/logo sem fundo.png';
import Whatsapp from '../assets/whatsapp.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import email from '../assets/gmail.png';

const Footer = () => {
  return (
    <footer className="bg-blue-950 p-6 text-white w-full">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <img 
          src={LogoSemFundo} 
          alt="Logo" 
          className="h-32 w-auto mb-4 md:mb-0" // Medium height for logo
        />
        
        {/* Redes Sociais */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2 text-center">Redes Sociais</h2>
          <div className="flex space-x-4">
            <a href="https://wa.me/5511912345678" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} alt="WhatsApp" className="h-12 w-auto" /> {/* Reduced height for social icons */}
            </a>
            <a href="https://facebook.com/sua-pagina" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="Facebook" className="h-12 w-auto" /> {/* Reduced height for social icons */}
            </a>
            <a href="https://instagram.com/sua-conta" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" className="h-12 w-auto" /> {/* Reduced height for social icons */}
            </a>
          </div>
        </div>

        {/* Fala com a Gente */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2 text-center">Fala com a Gente</h2>
          <div className="flex items-center space-x-1"> {/* Reduced space between icon and text */}
            <img src={email} alt="E-mail" className="h-12 w-auto" /> {/* Reduced height for email icon */}
            <span className="text-sm">contato@edimonitor.com</span>
          </div>
          <div className="flex items-center space-x-1"> {/* Reduced space between icon and text */}
            <img src={Whatsapp} alt="WhatsApp" className="h-12 w-auto" /> {/* Reduced height for WhatsApp icon */}
            <span className="text-sm">+55 11 91234-5678</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-gray-300">
        <p className="text-sm">Copyright © 2024 Edimonitor. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
