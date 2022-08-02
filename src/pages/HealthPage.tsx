import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BarGraph from '../components/BarGraph';
import InfoCard from '../components/InfoCard';
import { getHealthInsuranceData } from '../libs/api';
import './HealthPage.css';

const HealthPage: React.FC = () => {
  const [data, setData] = useState([]);
  const { option } = useParams<{ option: string }>();

  const getData = async () => {
    if (data.length < 1) {
      const res = await getHealthInsuranceData();
      setData(res?.data);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className='container'>
      {option === 'analysis' ? (
        <>
          <InfoCard />
          {data.length > 1 ? (
            <>
              <BarGraph
                title='Uninsured Rate'
                payload={data}
                graphDataKey={[
                  { dataKey: 'Uninsured Rate (2010)', color: '#ff4a4a' },
                  { dataKey: 'Uninsured Rate (2015)', color: '#8884d8' },
                ]}
              />
            </>
          ) : (
            <></>
          )}
          {data.length > 1 ? (
            <>
              <BarGraph
                title='Uninsured Rate Change 2015'
                payload={data}
                graphDataKey={[
                  {
                    dataKey: 'Uninsured Rate Change (2010-2015)',
                    color: '#82ca9d',
                  },
                ]}
              />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      {option === 'thesis' ? <h1>Thesis</h1> : <></>}
      {option === 'map' ? <h1>Map</h1> : <></>}
    </div>
  );
};

export default HealthPage;
