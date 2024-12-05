import React, { useState } from "react";
import { FaTrash, FaUserCheck, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const alunosData = [
  { id: 1, nome: "João Silva", email: "joao@gmail.com", dataNascimento: "1990-05-15" },
  { id: 2, nome: "Maria Oliveira", email: "maria@gmail.com", dataNascimento: "1995-10-20" },
  // Adicione mais alunos conforme necessário
];

export default function AlunosList() {
  const [alunos, setAlunos] = useState(alunosData);
  const [showForm, setShowForm] = useState(false);
  const [newAluno, setNewAluno] = useState({ nome: "", email: "", dataNascimento: "" });
  const [search, setSearch] = useState("");
  const [selectedAluno, setSelectedAluno] = useState(null);  // Estado para aluno selecionado para o modal

  const handleDeleteAluno = (id) => {
    setAlunos(alunos.filter((aluno) => aluno.id !== id));
  };

  const handleAddAlunoClick = () => {
    setShowForm(true);
  };

  const handleAddAlunoSubmit = () => {
    setAlunos([...alunos, { ...newAluno, id: alunos.length + 1 }]);
    setNewAluno({ nome: "", email: "", dataNascimento: "" });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    setNewAluno({ ...newAluno, [e.target.name]: e.target.value });
  };

  const handleViewProfile = (aluno) => {
    setSelectedAluno(aluno); // Exibe o modal com as informações do aluno
  };

  const filteredAlunos = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        {/* Link de Voltar para a página principal */}
        <Link to="/Dashboard-professor" className="mr-4 text-blue-500 hover:text-blue-700">
          <FaArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold">Lista de Alunos</h1>
      </div>

      {/* Botão de Adicionar Aluno */}
      <button
        onClick={handleAddAlunoClick}
        className="bg-green-500 text-white px-4 py-2 mb-6 rounded hover:bg-green-600"
      >
        Adicionar Aluno
      </button>

      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar aluno"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4 w-full max-w-xs"
      />

      {/* Tabela de Alunos */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 border border-gray-300">Nome</th>
            <th className="px-4 py-2 border border-gray-300">E-mail</th>
            <th className="px-4 py-2 border border-gray-300">Data de Nascimento</th>
            <th className="px-4 py-2 border border-gray-300">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlunos.map((aluno) => (
            <tr key={aluno.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{aluno.nome}</td>
              <td className="px-4 py-2">{aluno.email}</td>
              <td className="px-4 py-2">{aluno.dataNascimento}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDeleteAluno(aluno.id)}
                  className="text-red-500 hover:text-red-700 mx-2"
                >
                  <FaTrash size={18} />
                </button>
                <button
                  onClick={() => handleViewProfile(aluno)} // Clica no ícone para abrir o modal
                  className="text-green-500 hover:text-green-700 mx-2"
                >
                  <FaUserCheck size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulário para Adicionar Aluno */}
      {showForm && (
        <div className="mt-6 p-4 border border-gray-300 rounded shadow-md">
          <h2 className="text-xl mb-4">Adicionar Novo Aluno</h2>
          <input
            type="text"
            name="nome"
            value={newAluno.nome}
            onChange={handleInputChange}
            placeholder="Nome"
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <input
            type="email"
            name="email"
            value={newAluno.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <input
            type="date"
            name="dataNascimento"
            value={newAluno.dataNascimento}
            onChange={handleInputChange}
            placeholder="Data de Nascimento"
            className="border border-gray-300 rounded p-2 w-full mb-4"
          />
          <button
            onClick={handleAddAlunoSubmit}
            className="bg-green-500 text-white px-4 py-2 w-full rounded hover:bg-green-600"
          >
            Adicionar Aluno
          </button>
        </div>
      )}

      {/* Modal de Visualizar Aluno */}
      {selectedAluno && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between">
              {/* Link de Voltar para a página de lista */}
              <Link to="/" className="text-blue-500 hover:text-blue-700">
                <FaArrowLeft size={20} />
              </Link>
              <h2 className="text-2xl font-bold mb-4">Detalhes do Aluno</h2>
            </div>
            <p><strong>Nome:</strong> {selectedAluno.nome}</p>
            <p><strong>E-mail:</strong> {selectedAluno.email}</p>
            <p><strong>Data de Nascimento:</strong> {selectedAluno.dataNascimento}</p>
            <button
              onClick={() => setSelectedAluno(null)}  // Fecha o modal
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
