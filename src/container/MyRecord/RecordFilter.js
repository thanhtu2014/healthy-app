import React from 'react';
import { RecordFilterData } from '@/constants';

function RecordFilter() {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-[4vw]">
      {RecordFilterData.map((card) => (
        <div
          key={card.id}
          className="relative w-full sm:w-1/3 aspect-square p-2 md:p-4 lg:p-6 bg-primary-300 
        flex items-center justify-center"
        >
          <img
            src={card.image}
            alt="card-img"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition ease-in-out duration-300"
          />
          <div
            className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        flex flex-col items-center gap-2"
          >
            <div className="font-roboto px-2 text-3xl sm:text-2xl md:text-3xl text-primary-300 text-center">
              {card.label}
            </div>
            <div className="w-40 sm:w-fit md:w-40 px-2 py-1 bg-primary-400 flex item justify-center items-center">
              <div className="font-roboto text-white-light text-sm ">
                {card.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecordFilter;
