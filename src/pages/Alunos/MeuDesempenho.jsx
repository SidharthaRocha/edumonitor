import React from 'react';
import { FaChartLine, FaDownload } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-indigo-200 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Título da Página */}
        <h1 className="text-5xl font-extrabold text-[#6a0dad] text-center mb-12 animate__animated animate__fadeIn">
          Meu Desempenho Acadêmico
        </h1>
        
        {/* Cards de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visualizar Notas */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300">
            <h2 className="text-2xl font-semibold text-[#6a0dad] mb-4">Visualizar Notas</h2>
            <p className="text-gray-700 mb-4">Veja todas as notas recebidas em provas e trabalhos com facilidade.</p>
            <div className="flex justify-center items-center">
              <AiOutlineCheckCircle className="text-[#6a0dad] text-5xl"/>
            </div>
          </div>

          {/* Gráficos de Desempenho */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300">
            <h2 className="text-2xl font-semibold text-[#6a0dad] mb-4">Gráficos de Desempenho</h2>
            <p className="text-gray-700 mb-4">Acompanhe a evolução das suas notas ao longo do tempo.</p>
            <div className="mt-4">
              <FaChartLine className="text-[#6a0dad] text-6xl mx-auto"/>
            </div>
          </div>

          {/* Relatórios */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:scale-105 ease-in-out duration-300">
            <h2 className="text-2xl font-semibold text-[#6a0dad] mb-4">Relatórios</h2>
            <p className="text-gray-700 mb-4">Gere um relatório PDF com o desempenho acadêmico em um período específico.</p>
            <div className="mt-4">
              <FaDownload className="text-[#6a0dad] text-6xl mx-auto"/>
            </div>
          </div>
        </div>

        {/* Gráfico de Desempenho (exemplo) */}
        <div className="mt-12 bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300">
          <h3 className="text-3xl font-semibold text-[#6a0dad] mb-6">Evolução das Notas</h3>
          <div className="h-72 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-xl p-4 flex items-center justify-center text-white">
            <p className="text-lg">Gráfico interativo (exemplo de espaço para gráfico)</p>
          </div>
        </div>
        
        {/* Botões de Ação */}
        <div className="mt-12 text-center">
          <button className="bg-[#6a0dad] text-white px-6 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105 hover:bg-[#5a0ca3] duration-300">
            Gerar Relatório PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
