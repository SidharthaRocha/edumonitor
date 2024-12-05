import React from 'react';
import { FaDownload, FaVideo, FaFilePdf, FaLink } from 'react-icons/fa';

const recursosData = [
  { id: 1, tipo: 'PDF', nome: 'Material de Estudo de Matemática', link: '/materiais/matematica.pdf', icone: <FaFilePdf /> },
  { id: 2, tipo: 'Vídeo', nome: 'Aula de Física - Leis de Newton', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icone: <FaVideo /> },
  { id: 3, tipo: 'PDF', nome: 'Guia de Química - Tabela Periódica', link: '/materiais/quimica.pdf', icone: <FaFilePdf /> },
  { id: 4, tipo: 'Link', nome: 'Site de Referências de História', link: 'https://www.historia.com.br', icone: <FaLink /> },
];

const Recursos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-orange-200 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Título da Página */}
        <h1 className="text-5xl font-extrabold text-[#c75d2e] text-center mb-12 animate__animated animate__fadeIn">
          Meus Recursos de Estudo
        </h1>

        {/* Listagem de Recursos */}
        <div className="space-y-6">
          {recursosData.map((recurso) => (
            <div
              key={recurso.id}
              className="bg-white rounded-xl shadow-lg p-6 transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-[#c75d2e]">{recurso.nome}</h2>
                <div className="text-[#c75d2e] text-2xl">{recurso.icone}</div>
              </div>
              <p className="text-lg text-gray-700 mb-4">{recurso.tipo}</p>

              <a
                href={recurso.tipo === 'Link' ? recurso.link : '#'}
                target={recurso.tipo === 'Link' ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="text-[#c75d2e] hover:text-[#8a3c2e] transition-colors duration-300"
              >
                {recurso.tipo === 'PDF' || recurso.tipo === 'Vídeo' ? (
                  <button className="bg-[#c75d2e] text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-[#8a3c2e] transition-all ease-in-out duration-300">
                    Baixar {recurso.tipo === 'PDF' ? 'PDF' : 'Vídeo'}
                  </button>
                ) : (
                  <button className="bg-[#c75d2e] text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-[#8a3c2e] transition-all ease-in-out duration-300">
                    Acessar Site
                  </button>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recursos;
