import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Route, Routes } from 'react-router-dom';
import HealthAnalysisPage from './HealthAnalysisPage';
import HealthMapPage from './HealthMapPage';
import HealthThesisPage from './HealthThesisPage';

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
      </IonContent>
    </IonPage>
  );
};

export default Page;
