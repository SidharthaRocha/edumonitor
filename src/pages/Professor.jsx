import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Professor = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Função de login para o Professor
  const handleLoginProfessor = async () => {
    setLoading(true);
    setErrorMessage('');

    // Verificação básica de campos
    if (!email || !senha) {
      setErrorMessage('Por favor, preencha ambos os campos.');
      setLoading(false);
      return;
    }

    try {
      // Enviar dados para o backend específico de login do professor
      const response = await fetch('http://localhost/backend/login_professor.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      // Tentativa de capturar o corpo da resposta como JSON
      const result = await response.json();

      // Verificação de sucesso ou falha no login
      if (response.ok) {
        // Armazenando o tipo de usuário (professor) em localStorage
        localStorage.setItem('userType', result.userType);

        // Redirecionando para o Dashboard do professor
        if (result.userType === 'professor') {
          navigate('/Dashboard-professor');
        }
      } else {
        // Caso haja erro, definimos a mensagem de erro
        setErrorMessage(result.message || 'E-mail ou senha incorretos.');
      }
    } catch (error) {
      // Caso haja erro de conexão
      console.error('Erro ao conectar ao servidor:', error);
      setErrorMessage('Erro ao conectar ao servidor. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-900 font-poppins">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-96 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Link de Voltar */}
        <Link to="/aluno-professor" className="flex items-center text-purple-600 mb-4 hover:underline">
          <FaArrowLeft className="mr-2" />
          Voltar
        </Link>

        {/* Logo */}
        <img src={Logo} alt="Logotipo do Site" className="mb-6 w-32 mx-auto" />

        <h2 className="text-2xl font-semibold mb-4 text-purple-900">Login como Professor</h2>

        {/* Exibe mensagem de erro, caso exista */}
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}

        {/* Formulário de Login */}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
        />

        {/* Link para a página de cadastro */}
        <Link to="/Cadastro-professor" className="text-purple-600 mb-2 block hover:underline">
          Não possui conta? Cadastre-se
        </Link>

        {/* Botão de Login */}
        <button
          onClick={handleLoginProfessor} // Atualizando para chamar a função correta
          disabled={loading}
          className={`flex items-center justify-center p-4 ${loading ? 'bg-gray-400' : 'bg-purple-800'} text-white rounded-lg shadow-md transition hover:bg-purple-700 hover:shadow-lg w-full`}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </motion.div>
    </div>
  );
};

export default Professor;
