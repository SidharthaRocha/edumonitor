import React, { createContext, useContext, useState } from 'react';

const NotificacoesContext = createContext();

export const useNotificacoes = () => useContext(NotificacoesContext);

export const NotificacoesProvider = ({ children }) => {
  const [notificacoes, setNotificacoes] = useState([
    { id: 1, titulo: 'Nota de Matemática', descricao: 'Sua nota foi publicada.', lida: false },
    { id: 2, titulo: 'Lembrete de Evento', descricao: 'Reunião de pais amanhã às 18:00.', lida: false },
  ]);

  const adicionarNotificacao = (novaNotificacao) => {
    setNotificacoes((prev) => [...prev, novaNotificacao]);
  };

  return (
    <NotificacoesContext.Provider value={{ notificacoes, setNotificacoes, adicionarNotificacao }}>
      {children}
    </NotificacoesContext.Provider>
  );
};
