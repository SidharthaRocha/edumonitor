import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useNotificacoes } from '../NotificacoesContext';
import io from 'socket.io-client'; // Importando o cliente Socket.io

const socket = io('http://localhost:8080'); // Conexão com o WebSocket

const Notificacoes = () => {
  const { notificacoes, setNotificacoes } = useNotificacoes();

  useEffect(() => {
    // Recebe a notificação enviada pelo servidor WebSocket
    socket.on('message', (notificacao) => {
      setNotificacoes((prev) => [notificacao, ...prev]);
    });

    return () => {
      socket.off('message'); // Remove o ouvinte ao desmontar o componente
    };
  }, [setNotificacoes]);

  const marcarComoLida = (id) => {
    setNotificacoes((prev) =>
      prev.map((notificacao) =>
        notificacao.id === id ? { ...notificacao, lida: true } : notificacao
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/Dashboard-aluno" className="inline-flex items-center text-[#4c3c92] font-semibold text-lg">
            <FaArrowLeft className="mr-2" />
            Voltar
          </Link>
        </div>
        <h1 className="text-5xl font-extrabold text-[#4c3c92] text-center mb-12">Minhas Notificações</h1>
        <div className="space-y-6">
          {notificacoes.map((notificacao) => (
            <div
              key={notificacao.id}
              className={`bg-white rounded-xl shadow-lg p-6 ${
                notificacao.lida ? 'bg-gray-100' : 'hover:shadow-2xl'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className={`text-2xl font-semibold ${notificacao.lida ? 'text-gray-500' : 'text-[#4c3c92]'}`}>
                  {notificacao.titulo}
                </h2>
                {!notificacao.lida && (
                  <button onClick={() => marcarComoLida(notificacao.id)} className="text-[#4c3c92] text-2xl">
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
      </div>
    </div>
  );
};

export default Notificacoes;
