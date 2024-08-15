import React from 'react';
import { scheduleData } from '../constants';
import { FaCalendarDay } from 'react-icons/fa';

const Schedule = () => {
  return (
    <div className='relative py-20 pb-28 bg-gradient-to-r from-gray-900 to-gray-800 text-white' id='schedule'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-5xl font-extrabold mb-12 text-center text-goldenrod text-shadow-lg'>
          Festival Schedule
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {scheduleData.map((event) => (
            <article 
              key={event.id} 
              className='bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
            >
              <div className='relative p-6 flex items-center space-x-4'>
                <FaCalendarDay className='text-goldenrod text-5xl' aria-hidden='true' />
                <div>
                  <h3 className='text-3xl font-bold mb-2 text-shadow-md'>{event.date}</h3>
                  <h4 className='text-2xl font-semibold mb-2 text-shadow-sm'>{event.title}</h4>
                  <p className='text-lg leading-relaxed text-gray-300'>{event.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
