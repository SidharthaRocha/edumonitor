import React, { useState } from 'react';
import dayjs from 'dayjs'; // Para lidar com datas
import { Transition } from '@headlessui/react'; // Para animações suaves

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Data selecionada
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Função para gerar as semanas do mês
  const generateCalendar = (month) => {
    const startOfMonth = month.startOf('month');
    const endOfMonth = month.endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');

    const daysInCalendar = [];
    let currentDay = startOfWeek;

    while (currentDay.isBefore(endOfWeek)) {
      daysInCalendar.push(currentDay);
      currentDay = currentDay.add(1, 'day');
    }

    return daysInCalendar;
  };

  // Exemplo de evento ou tarefa
  const events = [
    { date: '2024-11-05', title: 'Reunião com equipe' },
    { date: '2024-11-10', title: 'Entrega de projeto' },
    { date: '2024-11-15', title: 'Análise de código' },
  ];

  // Filtra eventos para o mês atual
  const currentMonthEvents = events.filter(event =>
    dayjs(event.date).isSame(selectedDate, 'month')
  );

  const daysInCalendar = generateCalendar(selectedDate);

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setSelectedDate(selectedDate.subtract(1, 'month'))}
          className="text-lg text-gray-700 hover:text-gray-900"
        >
          ←
        </button>
        <h2 className="text-2xl font-semibold text-indigo-800">
          {selectedDate.format('MMMM YYYY')}
        </h2>
        <button
          onClick={() => setSelectedDate(selectedDate.add(1, 'month'))}
          className="text-lg text-gray-700 hover:text-gray-900"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4 text-center text-indigo-700">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-semibold">{day}</div>
        ))}
        {daysInCalendar.map((day, index) => {
          const isToday = day.isSame(dayjs(), 'day');
          const isSelected = day.isSame(selectedDate, 'day');
          const eventForDay = currentMonthEvents.find(event => day.isSame(event.date, 'day'));

          return (
            <Transition
              key={index}
              show={true}
              enter="transition-all duration-300 ease-in"
              leave="transition-all duration-300 ease-out"
            >
              <div
                className={`relative p-3 rounded-lg cursor-pointer ${isToday ? 'bg-indigo-200' : ''} ${isSelected ? 'bg-indigo-400 text-white' : ''}`}
                onClick={() => setSelectedDate(day)}
              >
                <span className="block">{day.date()}</span>
                {eventForDay && (
                  <div className="absolute bottom-1 text-xs text-white bg-indigo-500 px-2 py-1 rounded-full">
                    {eventForDay.title}
                  </div>
                )}
              </div>
            </Transition>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
