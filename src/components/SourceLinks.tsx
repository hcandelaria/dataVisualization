import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppPage } from '../interfaces/AppPage';

interface SourceLinksProps {
  appPages: AppPage[];
}

const SourceLinks: React.FC<SourceLinksProps> = ({ appPages }) => {
  const location = useLocation();

  return (
    <>
      <IonList id='labels-list'>
        <IonListHeader>
          {location.pathname.split('/')[2].charAt(0).toUpperCase() +
            location.pathname.split('/')[2].slice(1)}{' '}
          Sources
        </IonListHeader>

        {appPages.map((page, index) => {
          return (
            <div
              key={index}
              className={
                location.pathname.split('/')[2] === page.url.split('/')[2]
                  ? ''
                  : 'hidden'
              }
            >
              {page.sources.map((source, index) => {
                return (
                  <IonItem
                    href={source.url}
                    target={'_black'}
                    lines='none'
                    key={index}
                  >
                    <IonIcon
                      slot='start'
                      ios={source.iosIcon}
                      md={source.mdIcon}
                    />
                    <IonLabel>{source.title}</IonLabel>
                  </IonItem>
                );
              })}
            </div>
          );
        })}
      </IonList>
    </>
  );
};
export default SourceLinks;
