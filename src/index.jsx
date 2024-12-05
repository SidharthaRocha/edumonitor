import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './assets/Logo.png';
import { Link } from "react-router-dom";
import celularesquerda from './assets/celular2.png';
import celulardireita from './assets/celular.png';
import osPAIS from './assets/paismães.png';
import grafico from './assets/graficos.png';
import videoAula from './assets/videoaula.png';
import './css/CardComponent.css';
import './css/LargeImageComponent.css';
import './css/TitleWithImage.css';
import Carousel from './components/carousel';
import Footer from './components/Footer';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cards = [
    {
      title: "Acompanhe o Progresso do Seu Filho",
      text: "Com nossa monitoria online, os pais podem acompanhar em tempo real o desenvolvimento escolar dos alunos pelo app ou site. Esteja sempre informado!",
      imgSrc: osPAIS,
    },
    {
      title: "Interação Direta com os Professores",
      text: "Os pais podem interagir diretamente com os professores, tirando dúvidas e recebendo feedbacks sobre o desempenho do aluno. Participe ativamente da educação!",
      imgSrc: grafico,
    },
    {
      title: "Relatórios Detalhados de Desempenho",
      text: "Receba relatórios detalhados sobre o desempenho do seu filho, com gráficos e informações sobre cada disciplina. Acompanhe a evolução de forma clara!",
      imgSrc: videoAula,
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-white shadow-xl z-50 font-poppins font-semibold">
        <div className="flex items-center space-x-6">
          <img src={Logo} alt="Edmonitor" className="h-10 w-auto" />
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200">Home</Link>
            <Link to="/blog" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200">Blog</Link>
            <Link to="/sobre" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200">Sobre</Link>
          </div>
        </div>
        <div className="md:flex items-center">
          <Link to="/aluno-professor" className="bg-purple-700 text-white rounded-full px-6 py-3 transition-colors duration-200 hover:bg-purple-800">
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 p-6">
            <Link to="/" className="text-purple-700 text-xl" onClick={toggleMenu}>Home</Link>
            <Link to="/blog" className="text-purple-700 text-xl" onClick={toggleMenu}>Blog</Link>
            <Link to="/sobre" className="text-purple-700 text-xl" onClick={toggleMenu}>Sobre</Link>
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-purple-700">&times;</button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative mt-20 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-10 text-center md:flex md:items-center md:justify-between md:p-20 font-poppins font-semibold">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Acompanhe o Desenvolvimento do Seu Filho
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Com nossa plataforma de monitoria online, os pais podem acompanhar o progresso escolar dos alunos em tempo real. Receba atualizações instantâneas e interaja com os professores de forma prática e rápida!
          </p>
          <Link to="/mais-informacoes" className="mt-8 inline-block bg-yellow-400 text-purple-800 font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors">
            Saiba Mais
          </Link>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img src={celulardireita} alt="Imagem do celular" className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-100 font-poppins font-semibold">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-10">
            Como Funciona a Monitoria Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg mb-6 cursor-pointer"
                  onClick={() => handleImageClick(card.imgSrc)}
                />
                <h3 className="text-xl font-semibold text-purple-800 mb-4">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.text}</p>
                <Link to="/mais-informacoes" className="text-purple-800 font-semibold hover:text-yellow-500">
                  Saiba Mais ⇨
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative">
              <img src={selectedImage} alt="Imagem Ampliada" className="max-w-full max-h-screen object-contain" />
              <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-white bg-red-600 rounded-full p-2">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>

      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
