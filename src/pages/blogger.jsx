import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importando o Link do React Router
import Footer from '../components/Footer'; // Importando o componente Footer
import Paiensinando from '../assets/pai-ensinando-filho.png'; // Logo
import Logo from '../assets/logo.png'; // Logo
import Reunião from '../assets/reuniao_pais_escola.png';
import Estudante from '../assets/estudando.png';
import Aluno1 from '../assets/aluno.png'; // Imagem do aluno João
import Aluno2 from '../assets/aluna.png'; // Imagem do aluno Maria

const posts = [
  {
    id: 1,
    title: "Como Acompanhar o Desenvolvimento do Aluno",
    summary: "Dicas para pais sobre como monitorar o progresso escolar de seus filhos.",
    date: "25 de Outubro, 2024",
    image: Paiensinando,
  },
  {
    id: 2,
    title: "A Importância da Comunicação com os Professores",
    summary: "Entenda como manter um diálogo aberto com os educadores pode beneficiar o aprendizado.",
    date: "18 de Outubro, 2024",
    image: Reunião,
  },
  {
    id: 3,
    title: "Estratégias para Estudo em Casa",
    summary: "Métodos eficazes para ajudar seu filho a estudar em casa.",
    date: "10 de Outubro, 2024",
    image: Estudante,
  },
];

const students = [
  {
    name: "João",
    grade: 9.5,
    image: Aluno1,
  },
  {
    name: "Maria",
    grade: 8.7,
    image: Aluno2,
  },
];

const Bloguer = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu mobile

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Animação após 100ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-white shadow-xl z-50 font-poppins font-semibold">
        {/* Logo e Links */}
        <div className="flex items-center space-x-6">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200 font-poppins font-semibold">Home</Link>
            <Link to="/blog" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200 font-poppins font-semibold">Blog</Link>
            <Link to="/sobre" className="text-purple-700 hover:bg-purple-800 hover:text-white px-4 py-2 rounded transition-colors duration-200 font-poppins font-semibold">Sobre</Link>
          </div>
        </div>
        {/* Botão de Login */}
        <div className="hidden md:flex items-center">
          <Link to="/aluno-professor" className="bg-purple-700 text-white rounded-full px-6 py-3 transition-colors duration-200 hover:bg-purple-800 font-poppins font-semibold">
            Login
          </Link>
        </div>
        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <Link to="/" className="text-purple-700 text-xl font-poppins font-semibold" onClick={toggleMenu}>Home</Link>
          <Link to="/blog" className="text-purple-700 text-xl font-poppins font-semibold" onClick={toggleMenu}>Blog</Link>
          <Link to="/sobre" className="text-purple-700 text-xl font-poppins font-semibold" onClick={toggleMenu}>Sobre</Link>
          <Link to="/aluno-professor" className="bg-purple-700 text-white px-6 py-2 rounded-full text-xl font-poppins font-semibold" onClick={toggleMenu}>Login</Link>
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-2xl text-purple-700">
            &times;
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className={`flex-1 p-4 pt-20 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Blog Section */}
        <section id="blog" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-2" />
                <h3 className="font-semibold text-lg text-purple-800">{post.title}</h3>
                <p className="text-gray-600">{post.summary}</p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Avaliações Section */}
        <section id="avaliacoes">
          <h2 className="text-2xl font-bold mb-4 text-purple-800">Avaliações dos Alunos</h2>
          <div className="flex flex-col space-y-4">
            {students.map((student, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
                <img
                  src={student.image}
                  alt={`Imagem de ${student.name}`}
                  className="h-16 w-16 rounded-full mr-4 cursor-pointer"
                  onClick={() => openModal(student.image)} // Abrindo modal ao clicar na imagem
                />
                <div>
                  <h3 className="font-semibold">{`Aluno: ${student.name}`}</h3>
                  <p>{`Nota: ${student.grade}`}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal para Exibir Imagem */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <img src={modalImage} alt="Imagem ampliada" className="w-96 h-auto" />
              <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Bloguer;
