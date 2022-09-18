import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
} from '@ionic/react';
import {
  analyticsOutline,
  analyticsSharp,
  barChartOutline,
  barChartSharp,
  briefcaseOutline,
  briefcaseSharp,
  bulbOutline,
  bulbSharp,
  logoGithub,
  logoPython,
  mapOutline,
  mapSharp,
  readerOutline,
  readerSharp,
} from 'ionicons/icons';

import { AppPage } from '../interfaces/AppPage';
import './Menu.css';
import MenuLinks from './MenuLinks';
import SourceLinks from './SourceLinks';

const appPages: AppPage[] = [
  {
    title: 'Health Insurance Coverage',
    url: '/page/health/analysis',
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
    sources: [
      {
        title: 'Repository',
        url: 'https://github.com/hcandelaria/health-insurance-coverage',
        iosIcon: logoGithub,
        mdIcon: logoGithub,
      },
      {
        title: 'Jupyter Notebook',
        url: 'https://github.com/hcandelaria/healthCoverageAnalysis',
        iosIcon: logoPython,
        mdIcon: logoPython,
      },
      {
        title: 'Health Care Website',
        url: 'https://www.healthcare.gov/glossary/affordable-care-act/',
        iosIcon: bulbOutline,
        mdIcon: bulbSharp,
      },
    ],
    options: [
      {
        title: 'Analisys',
        url: '/page/health/analysis',
        iosIcon: barChartOutline,
        mdIcon: barChartSharp,
      },
      {
        title: 'Thesis',
        url: '/page/health/thesis',
        iosIcon: readerOutline,
        mdIcon: readerSharp,
      },
      {
        title: 'Map',
        url: '/page/health/map',
        iosIcon: mapOutline,
        mdIcon: mapSharp,
      },
    ],
  },
  {
    title: 'Population Growth',
    url: '/page/population/analysis',
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
    sources: [
      {
        title: 'Repository',
        url: 'https://github.com/hcandelaria/health-insurance-coverage',
        iosIcon: logoGithub,
        mdIcon: logoGithub,
      },
      {
        title: 'Jupyter Notebook',
        url: 'https://github.com/hcandelaria/healthCoverageAnalysis',
        iosIcon: logoPython,
        mdIcon: logoPython,
      },
      {
        title: 'Wolrdometer Website',
        url: 'https://www.worldometers.info/world-population/population-by-country/',
        iosIcon: bulbOutline,
        mdIcon: bulbSharp,
      },
    ],
    options: [
      {
        title: 'Analisys',
        url: '/page/population/analysis',
        iosIcon: barChartOutline,
        mdIcon: barChartSharp,
      },
      {
        title: 'Thesis',
        url: '/page/population/thesis',
        iosIcon: readerOutline,
        mdIcon: readerSharp,
      },
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <IonMenu contentId='main' id='menu-test' type='overlay'>
      <IonContent>
        <MenuLinks appPages={appPages} />
        <SourceLinks appPages={appPages} />
        <IonList id='footer-list'>
          <IonItem
            routerDirection='none'
            lines='none'
            detail={false}
            target={'_black'}
            href={'https://hcandelaria.com'}
          >
            <IonIcon slot='start' ios={briefcaseOutline} md={briefcaseSharp} />
            <IonLabel>My Portfolio</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
