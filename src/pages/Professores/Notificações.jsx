import React, { useState } from 'react';

const Notificacoes = () => {
  const [notificationType, setNotificationType] = useState('observacao');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotifications, setSentNotifications] = useState([]);

  const handleSendNotification = () => {
    if (email && subject && message) {
      const newNotification = {
        email,
        subject,
        message,
        type: notificationType,
        date: new Date().toLocaleString(),
      };

      setSentNotifications([newNotification, ...sentNotifications]);
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Título da página */}
      <h3 className="text-3xl font-semibold text-[#4C1D95] mb-6">Notificações</h3>

      {/* Formulário de envio de notificações */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-2xl font-semibold text-[#4C1D95] mb-4">Enviar Notificação</h4>
        <div className="space-y-4">
          {/* Selecione o tipo de notificação */}
          <div>
            <label className="block text-lg text-[#4C1D95] mb-2">Tipo de Notificação</label>
            <select
              value={notificationType}
              onChange={(e) => setNotificationType(e.target.value)}
              className="w-full px-4 py-2 border border-[#4C1D95] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
            >
              <option value="observacao">Observação</option>
              <option value="evento">Evento Escolar</option>
            </select>
          </div>

          {/* Campo de e-mail do aluno */}
          <div>
            <label className="block text-lg text-[#4C1D95] mb-2">E-mail do Aluno</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#4C1D95] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
              placeholder="E-mail do aluno"
            />
          </div>

          {/* Campo de assunto */}
          <div>
            <label className="block text-lg text-[#4C1D95] mb-2">Assunto</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-[#4C1D95] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
              placeholder="Assunto da notificação"
            />
          </div>

          {/* Campo de mensagem */}
          <div>
            <label className="block text-lg text-[#4C1D95] mb-2">Mensagem</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="w-full px-4 py-2 border border-[#4C1D95] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4C1D95]"
              placeholder="Digite a mensagem"
            ></textarea>
          </div>

          {/* Botão de enviar */}
          <div className="flex justify-end">
            <button
              onClick={handleSendNotification}
              className="bg-[#4C1D95] text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Enviar Notificação
            </button>
          </div>
        </div>
      </div>

      {/* Lista de notificações enviadas */}
      <div>
        <h4 className="text-2xl font-semibold text-[#4C1D95] mb-4">Notificações Enviadas</h4>
        <div className="space-y-4">
          {sentNotifications.length === 0 ? (
            <p className="text-lg text-gray-600">Nenhuma notificação enviada ainda.</p>
          ) : (
            sentNotifications.map((notification, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between">
                  <h5 className="text-xl font-semibold text-[#4C1D95]">{notification.subject}</h5>
                  <span className="text-sm text-gray-500">{notification.date}</span>
                </div>
                <p className="text-lg text-[#4C1D95] mt-2">{notification.message}</p>
                <div className="mt-2 text-sm text-gray-600">
                  <strong>Tipo:</strong> {notification.type === 'observacao' ? 'Observação' : 'Evento Escolar'}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <strong>Enviado para:</strong> {notification.email}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notificacoes;
