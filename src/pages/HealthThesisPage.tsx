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

const HealthThesisPage: React.FC = () => (
  <div className='container'>
    <IonGrid>
      <IonRow>
        <IonCol size='12'>
          <IonCard>
            <IonCardHeader>
              <br />
              <IonCardTitle>What is the Affordable Care Act?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size='12'>
                  The comprehensive health care reform law enacted in March 2010
                  (sometimes known as ACA, PPACA, or “Obamacare”).
                  <br />
                  <IonCardTitle>The law has 3 primary goals:</IonCardTitle>
                  <ul>
                    <li>
                      Make affordable health insurance available to more people.
                      The law provides consumers with subsidies (“premium tax
                      credits”) that lower costs for households with incomes
                      between 100% and 400% of the federal poverty level (FPL).
                    </li>
                    <li>
                      Expand the Medicaid program to cover all adults with
                      income below 138% of the FPL. (Not all states have
                      expanded their Medicaid programs.)
                    </li>
                    <li>
                      Support innovative medical care delivery methods designed
                      to lower the costs of health care generally.
                    </li>
                  </ul>
                </IonCol>
              </IonRow>
            </IonCardContent>
            <IonCardHeader>
              <IonCardTitle>Health Insurance Coverage Thesis</IonCardTitle>
              <br />
              <IonCardTitle>
                Does the The Affordable Care Act (ACA) address health insurance
                coverage?
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size='12'>
                  Yes, the Affordable Care Act has decreased the number of
                  people uninsured from 15.5% to 9.4% of the USA population
                  (2010-2015).
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
              <IonCardTitle>
                Can we predict the future of the USA uninsured rate?
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol size='12'>
                  I believe with the ACA alone we will plateau. The Affordable
                  Care Act does not aim to ensure that 100% of the USA
                  population has health insurance. Since this data is from
                  2010-2015, additional data from more recent years can help
                  prove the outcome. Additionally we could use Machine Learning
                  (ML) to forecast the uninsured rate for future years.
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
