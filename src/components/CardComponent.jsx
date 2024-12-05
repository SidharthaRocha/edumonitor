import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import osPAIS from '../assets/paismães.png';
import grafico from '../assets/graficos.png';
import videoAula from '../assets/videoaula.png';
import './CardComponent.css'; // Importar CSS para animação

const CardComponent = () => {
    const cards = [
        {
            title: "Acompanhe o Progresso do Seu Filho",
            text: "Com nossa monitoria online, os pais podem acompanhar em tempo real o desenvolvimento escolar dos alunos pelo app ou site. Esteja sempre informado!",
            imgSrc: osPAIS,
        },
        {
            title: "Interação Direta com os Professores",
            text: "Os pais podem interagir diretamente com os professores, tirando dúvidas e recebendo feedbacks sobre o desempenho do aluno. Participe ativamente da educação!",
            imgSrc: grafico,
        },
        {
            title: "Relatórios Detalhados de Desempenho",
            text: "Receba relatórios detalhados sobre o desempenho do seu filho, com gráficos e informações sobre cada disciplina. Acompanhe a evolução de forma clara!",
            imgSrc: videoAula,
        },
    ];

    // Hook para animar "para Pais"
    const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage('');
    };

    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-purple-800 text-3xl font-bold mb-6 text-center">
                Monitoria Online <span ref={titleRef} className={`text-purple-800 font-bold underline ${titleInView ? 'text-yellow-500 animate-pulse' : ''}`}>para Pais</span>
            </h1>
            <div className="flex flex-col space-y-4">
                {cards.map((card, index) => {
                    const { ref, inView } = useInView({ threshold: 0.1 });

                    return (
                        <motion.div
                            key={index}
                            ref={ref}
                            className="relative bg-gray-200 rounded-lg shadow-lg p-6 w-full flex flex-col lg:flex-row lg:w-128 transition-opacity duration-500"
                            initial={{ opacity: 0, y: 20 }} 
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                        >
                            <img
                                src={card.imgSrc}
                                alt="Imagem do card"
                                className="w-full h-64 object-cover rounded mr-4 cursor-pointer" // Mantendo a altura consistente
                                onClick={() => handleImageClick(card.imgSrc)}
                            />
                            <div className="flex flex-col flex-grow text-left">
                                <div className="absolute top-0 left-0 bg-white rounded-br-md px-2 text-xs text-purple-800">Novo</div>
                                <h3 className="text-purple-800 text-lg font-semibold mb-2">{card.title}</h3>
                                <p className="text-black mb-4">{card.text}</p>
                                <div className="flex justify-center">
                                    <a href="#" className="bg-purple-800 text-white rounded py-2 px-4 shadow-md hover:bg-purple-700 transition flex items-center">
                                        Saiba Mais ⇨ {/* Seta dupla */}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Modal para imagem */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Zoomed"
                            className="max-w-full max-h-screen object-contain transition-transform transform scale-100 hover:scale-110"
                        />
                        <button
                            className="absolute top-0 right-0 m-4 text-white bg-red-600 rounded-full p-2"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CardComponent;
