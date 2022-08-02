import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import Page from './pages/Page';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonSplitPane contentId='main'>
        <BrowserRouter>
          <Menu />
          <IonRouterOutlet id='main'>
            <Routes>
              <Route path='/page/*' element={<Page />} />
              <Route
                path='*'
                element={<Navigate to='/page/health/analysis' replace />}
              />
            </Routes>
          </IonRouterOutlet>
        </BrowserRouter>
      </IonSplitPane>
    </IonApp>
  );
};

export default App;
