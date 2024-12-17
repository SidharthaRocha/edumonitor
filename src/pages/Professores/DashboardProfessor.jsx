import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaChartLine, FaBell, FaCalendarAlt, FaCogs, FaFileAlt, FaEllipsisV } from 'react-icons/fa';
import { motion } from 'framer-motion';

function DashboardProfessor({ theme }) {
  const userName = "João"; // Substitua por lógica real para obter o nome do usuário
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Animações de entrada
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Função para alternar a visibilidade do dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      {/* Header com navegação horizontal */}
      <motion.header
        className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 p-4 fixed w-full top-0 left-0 z-10 shadow-md"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Portal do Professor(a)</h1>

          {/* Navegação no topo */}
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li>
                <NavLink
                  to="/Meusalunos-professor"
                  className={`text-white hover:text-indigo-300 ${theme === 'dark' ? 'hover:text-indigo-400' : ''} transition-all duration-300 ease-in-out flex items-center space-x-2 font-semibold`}
                
                >
                  <FaUser className="text-lg" />
                  <span>Meus Alunos</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/desempenho-professor"
                  className={`text-white hover:text-indigo-300 ${theme === 'dark' ? 'hover:text-indigo-400' : ''} transition-all duration-300 ease-in-out flex items-center space-x-2 font-semibold`}
                  
                >
                  <FaChartLine className="text-lg" />
                  <span>Desempenho</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notificacoes-professor"
                  className={`text-white hover:text-indigo-300 ${theme === 'dark' ? 'hover:text-indigo-400' : ''} transition-all duration-300 ease-in-out flex items-center space-x-2 font-semibold`}
                  
                >
                  <FaBell className="text-lg" />
                  <span>Notificações</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendario-professor"
                  className={`text-white hover:text-indigo-300 ${theme === 'dark' ? 'hover:text-indigo-400' : ''} transition-all duration-300 ease-in-out flex items-center space-x-2 font-semibold`}
                
                >
                  <FaCalendarAlt className="text-lg" />
                  <span>Calendário</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/configuracoes-professor"
                  className={`text-white hover:text-indigo-300 ${theme === 'dark' ? 'hover:text-indigo-400' : ''} transition-all duration-300 ease-in-out flex items-center space-x-2 font-semibold`}
                  
                >
                  <FaCogs className="text-lg" />
                  <span>Configurações</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/relatorios-professor"
                  className={`text-white hover:text-indigo-300 ${theme === 'dark' ? 'hover:text-indigo-400' : ''} transition-all duration-300 ease-in-out flex items-center space-x-2 font-semibold`}
                  
                >
                  <FaFileAlt className="text-lg" />
                  <span>Relatórios</span>
                </NavLink>
              </li>
            </ul>

            {/* Menu Hamburguer para telas pequenas */}
            <div className="md:hidden">
              <button onClick={toggleDropdown} className="text-white">
                <FaEllipsisV className="h-6 w-6" />
              </button>
            </div>

            {/* Dropdown - Opções quando clicar nos três pontinhos */}
            {isDropdownOpen && (
              <div className="absolute top-16 right-4 bg-indigo-800 text-white p-4 rounded-lg shadow-lg space-y-2 w-48">
                <NavLink to="/Meusalunos-professor" className="block hover:bg-indigo-700 px-2 py-1 rounded">Meus Alunos</NavLink>
                <NavLink to="/desempenho-professor" className="block hover:bg-indigo-700 px-2 py-1 rounded">Desempenho</NavLink>
                <NavLink to="/notificacoes-professor" className="block hover:bg-indigo-700 px-2 py-1 rounded">Notificações</NavLink>
                <NavLink to="/calendario-professor" className="block hover:bg-indigo-700 px-2 py-1 rounded">Calendário</NavLink>
                <NavLink to="/configuracoes-professor" className="block hover:bg-indigo-700 px-2 py-1 rounded">Configurações</NavLink>
                <NavLink to="/relatorios-professor" className="block hover:bg-indigo-700 px-2 py-1 rounded">Relatórios</NavLink>
              </div>
            )}
          </nav>
        </div>
      </motion.header>

      {/* Main Content - Espaço abaixo do header */}
      <motion.main
        className="pt-20 px-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-indigo-800">Bem-vindo, {userName || 'Professor'}</h2>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-300 ease-in-out">Logout</button>
          </div>
        </header>

        {/* Dashboard Cards - Painéis para as principais funcionalidades */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Meus Alunos</h3>
            <p className="text-gray-600">Acesse o perfil dos alunos, veja suas notas e históricos de atividades.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Desempenho</h3>
            <p className="text-gray-600">Acompanhe o desempenho dos alunos ao longo do semestre.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Notificações</h3>
            <p className="text-gray-600">Fique por dentro das atualizações e mensagens importantes.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Calendário</h3>
            <p className="text-gray-600">Visualize e organize as atividades e eventos importantes do semestre.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Relatórios</h3>
            <p className="text-gray-600">Gere relatórios de desempenho e atividades dos alunos.</p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Configurações</h3>
            <p className="text-gray-600">Altere configurações da conta e personalize sua experiência.</p>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}

export default DashboardProfessor;
