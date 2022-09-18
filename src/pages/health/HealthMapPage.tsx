import { IonProgressBar } from '@ionic/react';
import { ResponsiveChoropleth } from '@nivo/geo';
import React, { useEffect, useState } from 'react';
import CardToolTip from '../../components/CardToolTip';
import { getHealthInsuranceMapFeatures } from '../../libs/api';
import './HealthMapPage.css';

const data = [
  { id: '01', value: 10.1 },
  { id: '02', value: 14.9 },
  { id: '04', value: 10.8 },
  { id: '05', value: 9.5 },
  { id: '06', value: 8.6 },
  { id: '08', value: 8.1 },
  { id: '09', value: 6.0 },
  { id: '10', value: 5.9 },
  { id: '11', value: 3.8 },
  { id: '12', value: 13.3 },
  { id: '13', value: 13.9 },
  { id: '15', value: 4.0 },
  { id: '16', value: 11.0 },
  { id: '17', value: 7.1 },
  { id: '18', value: 9.6 },
  { id: '19', value: 5.0 },
  { id: '20', value: 9.1 },
  { id: '21', value: 6.0 },
  { id: '22', value: 11.9 },
  { id: '23', value: 8.4 },
  { id: '24', value: 6.6 },
  { id: '25', value: 2.8 },
  { id: '26', value: 6.1 },
  { id: '27', value: 4.5 },
  { id: '28', value: 12.7 },
  { id: '29', value: 9.8 },
  { id: '30', value: 11.6 },
  { id: '31', value: 8.2 },
  { id: '32', value: 12.3 },
  { id: '33', value: 6.3 },
  { id: '34', value: 8.7 },
  { id: '35', value: 10.9 },
  { id: '36', value: 7.1 },
  { id: '37', value: 11.2 },
  { id: '38', value: 7.8 },
  { id: '39', value: 6.5 },
  { id: '40', value: 13.9 },
  { id: '41', value: 7.0 },
  { id: '42', value: 6.4 },
  { id: '44', value: 5.7 },
  { id: '45', value: 10.9 },
  { id: '46', value: 10.2 },
  { id: '47', value: 10.3 },
  { id: '48', value: 17.1 },
  { id: '49', value: 10.5 },
  { id: '50', value: 3.8 },
  { id: '51', value: 9.1 },
  { id: '53', value: 6.6 },
  { id: '54', value: 6.0 },
  { id: '55', value: 5.7 },
  { id: '56', value: 11.5 },
  // { id: 'United States', value: 9.4 },
];

const HealthMapPage: React.FC = () => {
  const [features, setFeatures] = useState([]);
  const [scale, setScale] = useState(1000);
  const getFeatures = async () => {
    if (features.length < 1) {
      const res = await getHealthInsuranceMapFeatures();
      setFeatures(res?.data.features);
    }
  };
  const updateScale = () => {
    setScale(window.innerWidth);
  };

  useEffect(() => {
    getFeatures();
    if (window.innerWidth < 801) {
      updateScale();
    }
  });
  return (
    <div id='health-map-container'>
      {data.length > 1 && features.length > 1 ? (
        <ResponsiveChoropleth
          data={data}
          features={features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors='reds'
          domain={[0, 20]}
          unknownColor='#666666'
          label={'properties.name'}
          valueFormat='.2s'
          projectionScale={scale}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[100, -40, 0]}
          enableGraticule={false}
          graticuleLineColor='#dddddd'
          borderWidth={0.5}
          borderColor='#152538'
          tooltip={(e) => {
            const payload = { label: e.feature.label, value: e.feature.value };
            return <CardToolTip payload={payload} />;
          }}
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: '#ffffff',
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#6c6d6f',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      ) : (
        <IonProgressBar type='indeterminate'></IonProgressBar>
      )}
    </div>
  );
};

export default HealthMapPage;
