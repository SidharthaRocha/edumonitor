import { useContext, createContext, useState } from 'react';

const NotificacoesContext = createContext();

export const NotificacoesProvider = ({ children }) => {
  const [notificacoes, setNotificacoes] = useState([]);

  return (
    <NotificacoesContext.Provider value={{ notificacoes, setNotificacoes }}>
      {children}
    </NotificacoesContext.Provider>
  );
};

export const useNotificacoes = () => {
  return useContext(NotificacoesContext);
};
