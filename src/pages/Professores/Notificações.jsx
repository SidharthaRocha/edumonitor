import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotificacoes } from '../NotificacoesContext';
import axios from 'axios'; // Para fazer a requisição HTTP

const EnviarNotificacao = () => {
  const { adicionarNotificacao } = useNotificacoes();
  const [mensagem, setMensagem] = useState('');
  const [titulo, setTitulo] = useState('');
  const navigate = useNavigate();

  const handleEnviarNotificacao = async () => {
    if (!titulo || !mensagem) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      // Envia a notificação para o servidor PHP via API REST
      const response = await axios.post('http://localhost:8000/api.php', {
        titulo,
        descricao: mensagem,
      });

      // Adiciona a notificação localmente (se necessário)
      adicionarNotificacao(response.data);

      // Limpa os campos
      setTitulo('');
      setMensagem('');

      alert('Notificação enviada!');
    } catch (error) {
      console.error('Erro ao enviar notificação:', error);
      alert('Erro ao enviar notificação');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button onClick={() => navigate(-1)} className="text-purple-800 mb-6">Voltar</button>
      <h1 className="text-3xl font-bold text-purple-900 mb-8">Gerenciar Notificações</h1>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="block mb-4 p-2 border rounded"
        />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="block mb-4 p-2 border rounded w-full"
        />
        <button onClick={handleEnviarNotificacao} className="bg-purple-800 text-white px-4 py-2 rounded">
          Enviar Notificação
        </button>
      </div>
    </div>
  );
};

export default EnviarNotificacao;
