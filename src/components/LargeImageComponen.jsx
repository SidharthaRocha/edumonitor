import React from 'react';
import { useInView } from 'react-intersection-observer';
import celularesquerda from '../assets/header-2.webp';
import celulardireita from '../assets/celular.png';
import './LargeImageComponent.css'; // Import CSS for animation if needed

const LargeImageComponent = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-10 overflow-hidden" ref={ref}>
            <img
                src={celulardireita}
                alt="Imagem Grande"
                className={`scroll-image w-full md:w-1/2 lg:w-2/5 rounded mx-5 ${inView ? 'fade-in' : 'fade-out'}`}
            />
            <div className="flex flex-col items-center text-center mx-10">
                <h1 className="text-purple-800 text-3xl md:text-4xl font-bold mb-4">
                    Acompanhe o Desenvolvimento do Seu Aluno em Tempo Real
                </h1>
                <p className="text-base md:text-lg mb-6">
                    Com a nossa plataforma de monitoria online, os pais têm a conveniência de acompanhar o progresso escolar dos alunos diretamente pelo app, sem a necessidade de participar de reuniões presenciais. Receba atualizações instantâneas sobre desempenho, interaja com professores e acesse relatórios detalhados, tudo na palma da sua mão.
                </p>
                <a
                    href="#"
                    className="bg-purple-800 text-white rounded-full py-2 px-6 shadow-lg text-lg hover:bg-purple-700 transition duration-300"
                    style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }}
                >
                    Saiba Mais
                </a>
            </div>
            <img
                src={celularesquerda}
                alt="Imagem Grande"
                className={`scroll-image w-full md:w-1/2 lg:w-2/5 rounded mx-5 ${inView ? 'fade-in' : 'fade-out'}`}
            />
        </div>
    );
};

export default LargeImageComponent;