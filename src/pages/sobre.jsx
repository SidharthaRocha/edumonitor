import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../assets/logo.png';
import { FaBookOpen, FaComments, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sobre = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    closed: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Menu */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-white shadow-xl z-50 font-poppins font-semibold">
        <div className="flex items-center space-x-6">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200 font-poppins font-semibold">Home</Link>
            <Link to="/blog" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200 font-poppins font-semibold">Blog</Link>
            <Link to="/sobre" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200 font-poppins font-semibold">Sobre</Link>
          </div>
        </div>
        <div className="md:flex items-center">
          <Link to="/aluno-professor" className="bg-purple-700 text-white rounded-full px-6 py-3 transition-colors duration-200 hover:bg-purple-800 font-poppins font-semibold">
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 p-6"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <Link to="/" className="text-purple-700 text-xl font-poppins font-semibold" onClick={toggleMenu}>Home</Link>
          <Link to="/blog" className="text-purple-700 text-xl font-poppins font-semibold" onClick={toggleMenu}>Blog</Link>
          <Link to="/sobre" className="text-purple-700 text-xl font-poppins font-semibold" onClick={toggleMenu}>Sobre</Link>
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-purple-700">
            &times;
          </button>
        </motion.div>
      )}

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-950 to-blue-700 p-6 text-white text-center animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold">Sobre o Monitoramento Online</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pt-12 mt-6">
        <div className="max-w-3xl mx-auto">
          <section className="mb-8 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">O Que é o Monitoramento Online?</h2>
            <p className="text-gray-700 mb-4">
              O Monitoramento Online é uma plataforma inovadora que permite aos pais acompanhar o desempenho escolar de seus filhos de forma prática e eficiente.
            </p>
            <img src={Logo} alt="Logo" className="w-32 mx-auto mb-4" />
          </section>

          <section className="mb-8 bg-white shadow-lg rounded-lg p-6 animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Funcionalidades</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="flex items-center"><FaChartLine className="mr-2 text-purple-600" /> Acompanhamento de Notas e Desempenho</li>
              <li className="flex items-center"><FaComments className="mr-2 text-purple-600" /> Observações dos Professores em Tempo Real</li>
              <li className="flex items-center"><FaCalendarAlt className="mr-2 text-purple-600" /> Calendário de Atividades e Avaliações</li>
              <li className="flex items-center"><FaBookOpen className="mr-2 text-purple-600" /> Relatórios Detalhados sobre o Progresso do Aluno</li>
            </ul>
          </section>

          <section className="mb-8 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Benefícios para os Pais</h2>
            <p className="text-gray-700 mb-4">
              Os pais têm acesso a uma visão clara do desempenho de seus filhos, permitindo um suporte mais efetivo em suas jornadas educacionais.
            </p>
          </section>

          <section className="animate__animated animate__fadeInRight">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Como Funciona?</h2>
            <p className="text-gray-700 mb-4">
              Ao se cadastrar na plataforma, os pais podem criar perfis para seus filhos, onde poderão visualizar todas as informações relevantes em um único local.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sobre;
