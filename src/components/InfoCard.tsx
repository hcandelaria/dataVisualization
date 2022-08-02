import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import React from 'react';
import PieGraph from './PieGraph';

const InfoCard: React.FC = () => (
  <IonGrid>
    <IonRow>
      <IonCol size='12'>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>USA 2015 Uninsured Data</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonRow>
              <IonCol size='3'>
                Uninsured Change (2010 - 2015)
                <h1>USA</h1>
                <h1>6%</h1>
              </IonCol>
              <IonCol size='3'>
                Mean
                <h1>USA</h1>
                <h1>8.73%</h1>
              </IonCol>
              <IonCol size='3'>
                Highest
                <h1>Texas</h1>
                <h1>17.1%</h1>
              </IonCol>
              <IonCol size='3'>
                Lowest
                <h1>Massachusetts</h1>
                <h1>2.8%</h1>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonCol>
      <IonCol>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>USA 2010 Uninsured Rate</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            15.5%
            <PieGraph
              payload={[
                { name: 'Group A', value: 15.5 },
                { name: 'Group B', value: 84.5 },
              ]}
              colors={['#ff4a4a', '#00C49F']}
            />
          </IonCardContent>
        </IonCard>
      </IonCol>
      <IonCol>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>USA 2015 Uninsured Rate</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            9.4%
            <PieGraph
              payload={[
                { name: 'Group A', value: 9.49 },
                { name: 'Group B', value: 90.6 },
              ]}
              colors={['#ff4a4a', '#00C49F']}
            />
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  </IonGrid>
);

export default InfoCard;
