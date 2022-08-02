import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HealthAnalysisPage from './HealthAnalysisPage';
import HealthMapPage from './HealthMapPage';
import HealthThesisPage from './HealthThesisPage';

const Page: React.FC = () => {
  const location = useLocation();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{location.pathname.split('/')[3]}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{location.pathname.split('/')[3]}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Health Routes */}
        <Routes>
          <Route path='/health/analysis' element={<HealthAnalysisPage />} />
          <Route path='/health/thesis' element={<HealthThesisPage />} />
          <Route path='/health/map' element={<HealthMapPage />} />
        </Routes>
        {/* Demo Routes */}
        <Routes>
          <Route path='/demo/analysis' element={<div>demo coming soon</div>} />
          <Route path='/demo/thesis' element={<div>demo coming soon</div>} />
          <Route path='/demo/map' element={<div>demo coming soon</div>} />
        </Routes>
      </IonContent>
    </IonPage>
  );
};

export default Page;
