import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';
import '../css/Carousel.css'; // CSS para animação
import aluno1 from "../assets/aluno1.png";
import aluno2 from "../assets/aluno2.png";
import aluno3 from "../assets/aluno3.png";
import aluno4 from "../assets/aluno4.png";
import aluno5 from "../assets/aluno5.png";

const cardData = [
  {
    id: 1,
    title: 'João',
    content: 'Desempenho: A. O aluno participa ativamente das aulas.',
    image: aluno1,
  },
  {
    id: 2,
    title: 'Maria',
    content: 'Desempenho: B. Bom envolvimento, mas precisa melhorar em matemática.',
    image: aluno2,
  },
  {
    id: 3,
    title: 'Lucas',
    content: 'Desempenho: C. O aluno é motivado, mas precisa de mais atenção.',
    image: aluno3,
  },
  {
    id: 4,
    title: 'Ana',
    content: 'Desempenho: A. Excelente desempenho em todas as disciplinas.',
    image: aluno4,
  },
  {
    id: 5,
    title: 'Beatriz',
    content: 'Desempenho: B. Participa, mas deve se dedicar mais aos estudos.',
    image: aluno5,
  },
];

const Carousel = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div ref={ref} className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">
        <span className="text-purple-800">Acompanhamento do Desenvolvimento dos Alunos com o </span>
        <span
          className={`inline-block transition-all duration-500 ${
            isVisible ? 'text-yellow-500 animate-pulse' : 'text-purple-800'
          }`}
        >
          Edumonitor
        </span>
      </h2>
      <Slider {...settings} className={inView ? 'fade-in' : 'fade-out'}>
        {cardData.map(card => (
          <div key={card.id} className="bg-white rounded-lg shadow-md mx-2 p-4 flex flex-col">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
              onClick={() => handleImageClick(card.image)}
            />
            <h3 className="font-semibold text-lg mt-2 text-purple-800">{card.title}</h3>
            <p className="text-gray-700 flex-grow">{card.content}</p>
          </div>
        ))}
      </Slider>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-full max-h-screen object-contain"
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

export default Carousel;
