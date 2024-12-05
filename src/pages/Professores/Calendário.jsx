import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'; // Biblioteca do calendário
import 'react-calendar/dist/Calendar.css'; // Estilo do calendário
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Calendario = () => {
  // Estados para armazenar a data selecionada e os eventos
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [reminder, setReminder] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para adicionar um novo evento
  const addEvent = () => {
    if (newEvent && eventDate) {
      setEvents([
        ...events,
        { event: newEvent, date: eventDate, reminder: reminder },
      ]);
      setNewEvent('');
      setEventDate('');
      setReminder(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-900 font-poppins">
      <div className="flex items-center justify-center">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 w-96 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Link de Voltar */}
          <Link to="/Dashboard-professor" className="flex items-center text-purple-600 mb-4 hover:underline">
            <FaArrowLeft className="mr-2" />
            Voltar
          </Link>

          {/* Título */}
          <h2 className="text-3xl font-semibold mb-4 text-purple-900">Calendário de Eventos</h2>

          {/* Calendário */}
          <Calendar
            onChange={setDate}
            value={date}
            className="mb-6"
            tileClassName="cursor-pointer"
          />

          {/* Botão para adicionar evento */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center p-4 bg-purple-800 text-white rounded-lg shadow-md transition hover:bg-purple-700 hover:shadow-lg w-full mb-4"
          >
            <FaPlus className="mr-2" />
            Adicionar Evento
          </button>

          {/* Modal para adicionar evento */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg w-96 text-center shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-900">Novo Evento</h3>

                {/* Formulário para adicionar evento */}
                <input
                  type="text"
                  placeholder="Nome do Evento"
                  value={newEvent}
                  onChange={(e) => setNewEvent(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                />

                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                />

                <div className="flex items-center justify-center mb-4">
                  <input
                    type="checkbox"
                    checked={reminder}
                    onChange={() => setReminder(!reminder)}
                    className="mr-2"
                  />
                  <span className="text-purple-900">Lembrete para este evento</span>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-400 text-white py-2 px-4 rounded-lg"
                  >
                    Fechar
                  </button>
                  <button
                    onClick={addEvent}
                    className="bg-purple-800 text-white py-2 px-4 rounded-lg"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Exibição dos eventos programados */}
          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-4 text-purple-900">Eventos Programados</h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-purple-50 p-4 rounded-lg border border-purple-200"
                >
                  <h4 className="text-lg font-semibold text-purple-900">{event.event}</h4>
                  <p className="text-sm text-purple-700">Data: {event.date}</p>
                  {event.reminder && (
                    <p className="text-sm text-red-500">Lembrete ativado!</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Calendario;
