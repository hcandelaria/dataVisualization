import React, { useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='black'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

interface PieGraphProps {
  colors: string[];
  payload: Data[];
}

interface Data {
  name: string;
  value: number;
}

const PieGraph: React.FC<PieGraphProps> = ({ payload, colors }) => {
  const [data] = useState<Data[]>(payload);

  return (
    <PieChart width={400} height={200}>
      <Pie
        data={data}
        cx={200}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill='#8884d8'
        dataKey='value'
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={`${colors[index % colors.length]} `}
          />
        ))}
      </Pie>
    </PieChart>
  );
};
export default PieGraph;
