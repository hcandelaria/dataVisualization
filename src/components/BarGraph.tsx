import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './BarGraph.css';
interface BarGraphProps {
  title: string;
  subtitle?: string;
  graphDataKey: GraphDetails[];
  payload: State[];
}
interface State {
  State: string;
  context: any;
}

interface GraphDetails {
  color: string;
  dataKey: string;
}

const BarGraph: React.FC<BarGraphProps> = ({
  payload,
  graphDataKey,
  title,
  subtitle,
}) => {
  const [dataKeys] = useState<GraphDetails[]>(graphDataKey);
  const [data, setData] = useState<State[]>(payload);
  const [sorted, setSorted] = useState(false);

  const sortData = () => {
    const key = dataKeys[0].dataKey as keyof State;

    setData((data) => [
      ...data.slice().sort((a, b) => {
        return a[key] - b[key];
      }),
    ]);
    setSorted(true);
  };

  useEffect(() => {
    if (!sorted) {
      sortData();
    }
  });
  return (
    <IonCard>
      <IonCardHeader>
        {subtitle ? <IonCardSubtitle>{subtitle}</IonCardSubtitle> : <></>}
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <ResponsiveContainer width={'100%'} height={'100%'}>
          <BarChart
            data={data}
            width={500}
            height={300}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='State' />
            <YAxis />
            <Tooltip />
            <Legend />
            {dataKeys ? (
              dataKeys.map((info, index) => {
                return (
                  <Bar
                    key={index}
                    dataKey={`${info['dataKey']}`}
                    fill={`${info['color']}`}
                  />
                );
              })
            ) : (
              <></>
            )}
          </BarChart>
        </ResponsiveContainer>
      </IonCardContent>
    </IonCard>
  );
};

export default BarGraph;
