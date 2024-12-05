import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Importando o ícone da seta

const Configuracoes = () => {
  const navigate = useNavigate(); // Inicializando o navigate

  // Estado para tema, e-mail e configurações de notificação
  const [theme, setTheme] = useState('light');
  const [email, setEmail] = useState('');
  const [notificationSettings, setNotificationSettings] = useState({
    performance: true,
    monitoria: true,
    messages: true,
  });

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isSaved, setIsSaved] = useState(false); // Para exibir feedback de que as configurações foram salvas

  // Carregar configurações do localStorage ao montar o componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedEmail = localStorage.getItem('email');
    const savedNotifications = JSON.parse(localStorage.getItem('notificationSettings'));

    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    if (savedEmail) {
      setEmail(savedEmail);
    }

    if (savedNotifications) {
      setNotificationSettings(savedNotifications);
    }
  }, []);

  // Função para salvar as configurações no localStorage
  const handleSaveSettings = () => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('email', email);
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));

    setIsSaved(true); // Exibir mensagem de sucesso
    setTimeout(() => setIsSaved(false), 3000); // Ocultar após 3 segundos
  };

  // Função para mudar o tema
  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Função para mudar as configurações de notificação
  const handleNotificationChange = (e) => {
    setNotificationSettings({
      ...notificationSettings,
      [e.target.name]: e.target.checked,
    });
  };

  // Função para verificar se as senhas coincidem
  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
    } else {
      setPasswordError('');
    }
  };

  // Função para voltar para o Dashboard do Professor
  const handleBackToDashboard = () => {
    navigate('/dashboard-professor'); // Redireciona para o dashboard do professor
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300">
      <h3 className="text-3xl font-semibold text-[#4C1D95] mb-6 dark:text-white">Configurações</h3>

      {/* Seção de Preferências de Notificação */}
      <div className="mb-6">
        <h4 className="text-2xl font-semibold text-[#4C1D95] dark:text-white">Preferências de Notificação</h4>
        <div className="mt-4 space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="performance"
              checked={notificationSettings.performance}
              onChange={handleNotificationChange}
              className="form-checkbox h-5 w-5 text-[#4C1D95] dark:text-white"
            />
            <label className="ml-3 text-lg text-[#4C1D95] dark:text-white">Notificações de Desempenho</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="monitoria"
              checked={notificationSettings.monitoria}
              onChange={handleNotificationChange}
              className="form-checkbox h-5 w-5 text-[#4C1D95] dark:text-white"
            />
            <label className="ml-3 text-lg text-[#4C1D95] dark:text-white">Notificações de Monitoria Online</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="messages"
              checked={notificationSettings.messages}
              onChange={handleNotificationChange}
              className="form-checkbox h-5 w-5 text-[#4C1D95] dark:text-white"
            />
            <label className="ml-3 text-lg text-[#4C1D95] dark:text-white">Notificações de Mensagens de Professores</label>
          </div>
        </div>
      </div>

      {/* Seção de Tema */}
      <div className="mb-6">
        <h4 className="text-2xl font-semibold text-[#4C1D95] dark:text-white">Preferências de Tema</h4>
        <div className="mt-4">
          <label className="inline-flex items-center text-[#4C1D95] dark:text-white">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
              className="form-radio h-5 w-5 text-[#4C1D95]"
            />
            <span className="ml-3 text-lg">Tema Claro</span>
          </label>
          <br />
          <label className="inline-flex items-center mt-2 text-[#4C1D95] dark:text-white">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
              className="form-radio h-5 w-5 text-[#4C1D95]"
            />
            <span className="ml-3 text-lg">Tema Escuro</span>
          </label>
        </div>
      </div>

      {/* Seção de Edição de Perfil */}
      <div className="mb-6">
        <h4 className="text-2xl font-semibold text-[#4C1D95] dark:text-white">Perfil do Usuário</h4>
        <div className="mt-4">
          <label className="block text-lg font-medium text-[#4C1D95] dark:text-white">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full px-4 py-2 border border-[#4C1D95] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4C1D95] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Digite seu e-mail"
          />
        </div>
      </div>

      {/* Seção de Alteração de Senha */}
      <div className="mb-6">
        <h4 className="text-2xl font-semibold text-[#4C1D95] dark:text-white">Alteração de Senha</h4>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-lg font-medium text-[#4C1D95] dark:text-white">Nova Senha</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-[#4C1D95] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4C1D95] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Digite a nova senha"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#4C1D95] dark:text-white">Confirmar Senha</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={handlePasswordChange} // Verificar se as senhas coincidem
              className="mt-2 w-full px-4 py-2 border border-[#4C1D95] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4C1D95] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Confirme a nova senha"
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>
        </div>
      </div>

      {/* Botão de Salvar Configurações */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-[#4C1D95] text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          onClick={handleSaveSettings}
        >
          Salvar Configurações
        </button>
      </div>

      {/* Feedback de Salvo */}
      {isSaved && (
        <div className="mt-4 text-green-500 text-lg">
          <p>Configurações salvas com sucesso!</p>
        </div>
      )}

      {/* Botão de Voltar para Dashboard do Professor */}
      <div className="flex justify-start">
        <button
          className="bg-gray-300 text-[#4C1D95] px-6 py-2 rounded-md hover:bg-gray-400 transition flex items-center"
          onClick={handleBackToDashboard}
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2 text-[#4C1D95]" />
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Configuracoes;
