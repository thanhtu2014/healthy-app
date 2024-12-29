import React from 'react';
import { ColumnsList } from '@/constants';

function ColumnList() {
  return (
    <div className="w-full pt-14 grid grid-cols-12 gap-x-[10px] gap-y-[18px]">
      {ColumnsList.map((entry) => (
        <div
          key={entry.id}
          className="col-span-12 mg:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-2"
        >
          <div className="relative w-full h-60 overflow-hidden rounded-md">
            <img
              src={entry.image}
              alt="column img"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 min-w-36 pl-2 py-2 bg-primary-300">
              <div className="font-roboto text-base text-white-light">
                <span className="mr-2">{entry.date}</span>
                <span>{entry.time}</span>
              </div>
            </div>
          </div>
          <div
            className="font-roboto text-bgprimary text-base overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
            }}
          >
            {entry.description}
          </div>
          <div className="flex gap-2 flex-wrap">
            {entry.tags.map((tag) => (
              <div className="font-roboto text-primary-400">#{tag}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColumnList;
