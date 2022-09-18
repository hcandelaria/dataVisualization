import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { Route, Routes } from 'react-router-dom';
import HealthAnalysisPage from './health/HealthAnalysisPage';
import HealthMapPage from './health/HealthMapPage';
import HealthThesisPage from './health/HealthThesisPage';
import PopulationPage from './population/PopulationAnalysisPage';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar></IonToolbar>
        </IonHeader>
        {/* Health Routes */}
        <Routes>
          <Route path='/health/analysis' element={<HealthAnalysisPage />} />
          <Route path='/health/thesis' element={<HealthThesisPage />} />
          <Route path='/health/map' element={<HealthMapPage />} />
        </Routes>
        {/* Population Routes */}
        <Routes>
          <Route path='/population/analysis' element={<PopulationPage />} />
          <Route path='/population/thesis' element={<PopulationPage />} />
        </Routes>
      </IonContent>
    </IonPage>
  );
};

export default Page;
