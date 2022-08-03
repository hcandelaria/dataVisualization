import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import React from 'react';

interface CardToolTipProps {
  payload: any;
}

const CardToolTip: React.FC<CardToolTipProps> = ({ payload }) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{payload.label}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size='12'>
                  <h1>{payload.value}%</h1>
                  <h3> Uninsured 2015</h3>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default CardToolTip;
