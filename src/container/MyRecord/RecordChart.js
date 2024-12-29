import React from 'react';
import MyLineChart from '@/container/HomePage/LineChart';
import { FilterItems } from '@/constants';

function RecordChart() {
  return (
    <div className="h-[45vh] px-6 py-4 bg-black text-white-light flex flex-col gap-3">
      <div className="flex items-center justify-start gap-4">
        <pre className="whitespace-pre-wrap font-roboto text-lg leading-6 font-light">
          {`BODY 
RECORD`}
        </pre>
        <div className="font-roboto text-[22px]">2021.05.21</div>
      </div>
      <div className="flex-1">
        <MyLineChart />
      </div>
      <div className="h-7 flex items-center gap-4">
        {FilterItems.map((button) => (
          <button
            type="button"
            key={button.id}
            className={`px-5 py-1 rounded-full ${button.color} font-roboto text-sm`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecordChart;
