import React, { useState } from 'react';
import { FaBell, FaCheckCircle } from 'react-icons/fa';

const notificacoesData = [
  { id: 1, titulo: 'Nota de Matemática', descricao: 'Sua nota na prova de Matemática foi publicada. Confira no seu desempenho!', lida: false },
  { id: 2, titulo: 'Lembrete de Evento', descricao: 'Lembrete: a reunião de pais será amanhã às 18:00.', lida: false },
  { id: 3, titulo: 'Nova Tarefa', descricao: 'Nova tarefa de História disponível. Prazo até sexta-feira.', lida: true },
  { id: 4, titulo: 'Aviso de Feriado', descricao: 'Não haverá aula na próxima segunda-feira devido ao feriado.', lida: false },
];

const Notificacoes = () => {
  const [notificacoes, setNotificacoes] = useState(notificacoesData);

  const marcarComoLida = (id) => {
    setNotificacoes(prevState =>
      prevState.map((notificacao) =>
        notificacao.id === id ? { ...notificacao, lida: true } : notificacao
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Título da Página */}
        <h1 className="text-5xl font-extrabold text-[#4c3c92] text-center mb-12 animate__animated animate__fadeIn">
          Minhas Notificações
        </h1>

        {/* Lista de Notificações */}
        <div className="space-y-6">
          {notificacoes.map((notificacao) => (
            <div
              key={notificacao.id}
              className={`bg-white rounded-xl shadow-lg p-6 transition-all transform ${
                notificacao.lida ? 'bg-gray-100' : 'hover:shadow-2xl'
              } hover:scale-105 ease-in-out duration-300`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-2xl font-semibold ${notificacao.lida ? 'text-gray-500' : 'text-[#4c3c92]'}`}>
                  {notificacao.titulo}
                </h2>
                {!notificacao.lida && (
                  <button
                    onClick={() => marcarComoLida(notificacao.id)}
                    className="text-[#4c3c92] text-2xl"
                    title="Marcar como lida"
                  >
                    <FaCheckCircle />
                  </button>
                )}
              </div>
              <p className={`text-lg ${notificacao.lida ? 'text-gray-500' : 'text-gray-700'}`}>
                {notificacao.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Botão de Ação */}
        <div className="mt-12 text-center">
          <button className="bg-[#4c3c92] text-white px-6 py-3 rounded-full text-xl font-semibold transition-transform transform hover:scale-105 hover:bg-[#3b2e74] duration-300">
            Ver Mais Notificações
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notificacoes;
