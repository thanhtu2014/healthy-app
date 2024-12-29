import React from 'react';
import { DataLineChart } from '@/constants';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';


function MyLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={DataLineChart}>
        <Line
          type="linear"
          dataKey="value1"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
        <Line
          type="linear"
          dataKey="value2"
          stroke="#FFD700"
          strokeWidth={2}
          dot={{ r: 3 }}
        />

        {DataLineChart.map((entry) => (
          <ReferenceLine
            key={entry.id}
            x={entry.month}
            stroke="#ffffff"
            strokeWidth={1}
            strokeOpacity={0.5}
          />
        ))}

        <XAxis
          dataKey="month"
          stroke="#ddd"
          padding={{ left: 30, right: 30 }}
          axisLine={false}
        />
        <Tooltip contentStyle={{ backgroundColor: '#333', color: '#fff' }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MyLineChart;
