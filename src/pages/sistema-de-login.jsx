import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png'; // Substitua pelo caminho do seu logo
import { FaChalkboardTeacher, FaUserGraduate, FaHome } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-900 p-4">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm text-center"
        initial={{ opacity: 0, y: -20 }} // Estado inicial da animação
        animate={{ opacity: 1, y: 0 }} // Estado final da animação
        transition={{ duration: 0.5 }} // Duração da animação
      >
        {/* Logotipo */}
        <img
          src={Logo}
          alt="Logotipo do Site"
          className="mb-6 w-32 mx-auto"
        />

        {/* Título com quebra de linha */}
        <h2 className="text-2xl font-semibold mb-4 text-purple-900 font-poppins">
          Quem é você?<br />
          <span className="text-lg font-normal">Conta tudo :)</span>
        </h2>

        {/* Botão Voltar para Home */}
        <Link
          to="/"
          className="flex items-center justify-center p-4 bg-gray-300 text-black rounded-lg shadow-md mb-4 hover:bg-gray-400 transition"
        >
          <FaHome className="mr-2" />
          Voltar para Home
        </Link>

        {/* Opções de Login */}
        <div className="flex flex-col space-y-4">
          <Link
            to="/professor"
            className="flex items-center justify-start p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            <FaChalkboardTeacher className="mr-2" />
            Entrar como Professor
          </Link>
          <Link
            to="/aluno"
            className="flex items-center justify-start p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            <FaUserGraduate className="mr-2" />
            Entrar como Aluno
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
