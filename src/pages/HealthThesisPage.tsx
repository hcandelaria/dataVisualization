import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/react';
import React from 'react';

const HealthThesisPage: React.FC = () => (
  <div className='container'>
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Health Insurance Coverage</IonCardTitle>
              <br />
              <IonCardTitle>
                Does the The Affordable Care Act (ACA) address health insurance
                coverage?
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size='12'>
                  The Affordable Care Act has decrease the number of people
                  uninsured from 2010-2015 to 9.4% of the USA population.
                </IonCol>
              </IonRow>
            </IonCardContent>
            <IonCardHeader>
              <IonCardTitle>Which state benefited the most?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size='12'>
                  Nevada (-10.3%), Oregan (-10.1%) and California (-9.9%).
                </IonCol>
              </IonRow>
            </IonCardContent>
            <IonCardHeader>
              <IonCardTitle>Can we predict USA Uninsured?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size='12'>
                  I belive just counting with the ACA we will get plateau. Since
                  this data is from 2010-2015, additional data from more recent
                  years can help prove the outcome. Additionally we could use ML
                  to try to predict, but additional features might be required.
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  </div>
);

export default HealthThesisPage;
