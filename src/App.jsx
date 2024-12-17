import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Blog from './pages/blogger';
import Sobre from './pages/sobre';
import AlunoProfessor from './pages/sistema-de-login';
import Informação from './pages/informação';
import Professor from './pages/Professor'
import { NotificacoesProvider } from './pages/NotificacoesContext';
import CadastroProfessor from './pages/CadastroProfessor'
import Aluno from './pages/Aluno'
import Cadastro from './pages/CadastroAluno'
import Home from './index';
import Dashboardprofessor from './pages/Professores/DashboardProfessor';
import Dashboardaluno from './pages/Alunos/DashboardAluno';
import MeusAlunosProfessor  from './pages/Professores/MeusAlunos'
import DesempenhoProfessor from './pages/Professores/Desempenho';
import NotificacoesProfessor from './pages/Professores/Notificações';
import CalendarioProfessor from './pages/Professores/Calendário';
import ConfiguracoesProfessor from './pages/Professores/Configurações';
import  RelatoriosProfessor from './pages/Professores/RelatóriosProfessor';
import MeuDesempenhoAluno from './pages/Alunos/MeuDesempenho';
import MeuComportamentoAluno from './pages/Alunos/MeuComportamento';
import NotificacoesAluno from './pages/Alunos/Notificações';
import CalendarioAluno from './pages/Alunos/Calendário';
import RecursosAluno from './pages/Alunos/Recursos';
import 'animate.css';


const App = () => {
  const [theme, setTheme] = useState('light'); // Estado global para o tema

  // Carregar o tema do localStorage quando o componente for montado
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark'); // Ativa o modo escuro
      } else {
        document.documentElement.classList.remove('dark'); // Desativa o modo escuro
      }
    }
  }, []);

  // Função para alterar o tema globalmente
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Atualiza o estado do tema
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark'); // Ativa o modo escuro
    } else {
      document.documentElement.classList.remove('dark'); // Desativa o modo escuro
    }
    localStorage.setItem('theme', newTheme); // Salva a preferência no localStorage
  };

return (

    <BrowserRouter>
    <NotificacoesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/aluno-professor" element={<AlunoProfessor />} />
        <Route path="/mais-informacoes" element={<Informação />} />
        <Route path="/professor" element={<Professor/>} />
        <Route path="/Cadastro-professor" element={<CadastroProfessor/>} />
        <Route path="/aluno" element={<Aluno/>} />
        <Route path="/Cadastro-aluno" element={<Cadastro/>} />
        <Route path="/Dashboard-aluno" element={<Dashboardaluno/>} />
        <Route path="/Dashboard-professor" element={<Dashboardprofessor/>} />
        <Route path="/Meusalunos-professor" element={<MeusAlunosProfessor />} />
        <Route path="/desempenho-professor" element={<DesempenhoProfessor />} />
        <Route path="/notificacoes-professor" element={<NotificacoesProfessor />} />
        <Route path="/calendario-professor" element={<CalendarioProfessor />} />
        <Route path="/configuracoes-professor" element={<ConfiguracoesProfessor />} />
        <Route path="/relatorios-professor" element={<RelatoriosProfessor />} />
        <Route path="/meudesempenho-aluno" element={<MeuDesempenhoAluno />} />
        <Route path="/meucomportamento-aluno" element={<MeuComportamentoAluno />} />
        <Route path="/notificacoes-aluno" element={<NotificacoesAluno />} />
        <Route path="/calendario-aluno" element={<CalendarioAluno />} />
        <Route path="/recursos-aluno" element={<RecursosAluno />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </NotificacoesProvider>
    </BrowserRouter>
    
  );
};

export default App;
