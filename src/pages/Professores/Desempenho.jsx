import React, { useState } from 'react';
import { FaArrowLeft, FaPlus, FaDownload, FaEdit, FaTrash } from 'react-icons/fa'; // Ícones
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2'; // Gráfico de desempenho
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const alunosData = [
  { id: 1, nome: "João Silva", email: "joao@example.com", desempenho: [75, 80, 85, 90, 95] },
  { id: 2, nome: "Maria Oliveira", email: "maria@example.com", desempenho: [65, 70, 75, 80, 85] },
  { id: 3, nome: "Carlos Pereira", email: "carlos@example.com", desempenho: [90, 85, 80, 75, 70] },
];

function Desempenho({ theme }) {
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);
  const [notas, setNotas] = useState([]);
  const [isAddNotasModalOpen, setIsAddNotasModalOpen] = useState(false);
  const [newNota, setNewNota] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Função para selecionar um aluno
  const selecionarAluno = (aluno) => {
    setAlunoSelecionado(aluno);
  };

  // Função para adicionar notas
  const adicionarNotas = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (newNota) {
      setTimeout(() => {
        setNotas([...notas, newNota]);
        setNewNota('');
        setIsAddNotasModalOpen(false);
        setFeedbackMessage('Nota adicionada com sucesso!');
        setIsLoading(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setFeedbackMessage('Por favor, insira uma nota válida.');
        setIsLoading(false);
      }, 1500);
    }
  };

  // Dados do gráfico de desempenho
  const graficoData = alunoSelecionado
    ? {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [
          {
            label: 'Desempenho',
            data: alunoSelecionado.desempenho,
            fill: false,
            borderColor: '#4c1d95',
            tension: 0.1,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#4c1d95',
          },
        ],
      }
    : {};

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      {/* Header com botão de voltar */}
      <motion.header
        className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center">
          <button className="text-lg mr-4" onClick={() => window.history.back()}>
            <FaArrowLeft />
          </button>
          <h1 className="text-xl font-bold">Desempenho</h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main
        className="pt-20 px-6"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {/* Seleção de aluno */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-indigo-800">Selecione um Aluno</h2>
          <div className="flex space-x-4 mt-4">
            {alunosData.map((aluno) => (
              <motion.button
                key={aluno.id}
                onClick={() => selecionarAluno(aluno)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                {aluno.nome}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Exibir gráfico de desempenho */}
        {alunoSelecionado && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-indigo-800">Desempenho de {alunoSelecionado.nome}</h3>
              <div className="mt-4 w-full max-w-lg mx-auto">
                <Line data={graficoData} />
              </div>
            </div>

            {/* Cartão de Ações */}
            <div className="flex space-x-4 mt-6">
              <motion.button
                onClick={() => setIsAddNotasModalOpen(true)}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <FaPlus className="mr-2" />
                Adicionar Notas
              </motion.button>

              <motion.button
                onClick={() => alert('Baixar Relatório em PDF')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <FaDownload className="mr-2" />
                Visualizar Relatórios
              </motion.button>
            </div>
          </>
        )}

        {/* Feedback Message */}
        {feedbackMessage && (
          <div className={`mt-4 p-4 rounded-lg text-white ${feedbackMessage.includes('sucesso') ? 'bg-green-500' : 'bg-red-500'}`}>
            {feedbackMessage}
          </div>
        )}

        {/* Modal de Adicionar Notas */}
        {isAddNotasModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 transform transition-all duration-300 ease-in-out">
              <h2 className="text-xl font-semibold mb-4">Adicionar Nota</h2>
              <form onSubmit={adicionarNotas}>
                <input
                  type="number"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-md"
                  placeholder="Nota"
                  value={newNota}
                  onChange={(e) => setNewNota(e.target.value)}
                  min="0"
                  max="10"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? 'Carregando...' : 'Adicionar Nota'}
                </button>
              </form>
              <button
                onClick={() => setIsAddNotasModalOpen(false)}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </motion.main>
    </div>
  );
}

export default Desempenho;
