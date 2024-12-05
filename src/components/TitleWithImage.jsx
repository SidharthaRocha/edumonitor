import React from 'react';
import { useInView } from 'react-intersection-observer';
import Imgbase from "../assets/imageBase.png";
import './TitleWithImage.css'; // Importar CSS para animação

const TitleWithImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger quando 10% do elemento está visível
  });

  return (
    <div 
      ref={ref} 
      className="flex flex-col md:flex-row items-center justify-center p-4 mt-20" 
    >
      <img 
        src={Imgbase}
        alt="Descrição da Imagem" 
        className={`h-64 w-auto rounded-lg mx-4 md:mx-20 mt-10 scroll-image ${inView ? 'fade-in' : 'fade-out'}`} // Animação
      />
      <div className={`text-purple-800 text-xl font-bold text-center md:text-left md:-mt-32 md:w-1/2 mt-10 ${inView ? 'fade-in' : 'fade-out'}`}>
        <span className="block">Como usar um aplicativo de</span>
        <span className="block">acompanhamento escolar para</span>
        <span className="block">melhorar o ensino</span>
      </div>
    </div>
  );
};

export default TitleWithImage;
