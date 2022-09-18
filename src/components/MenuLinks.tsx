import {
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuToggle,
} from '@ionic/react';
import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { AppPage } from '../interfaces/AppPage';

interface MenuLinksProps {
  appPages: AppPage[];
}

const MenuLinks: React.FC<MenuLinksProps> = ({ appPages }) => {
  const location = useLocation();
  const [dataProject, setDataProject] = useState('');

  return (
    <>
      <IonList id='inbox-list'>
        <IonListHeader>Analysis</IonListHeader>
        {appPages.map((appPage, index) => {
          if (location.pathname === appPage.url && dataProject === '') {
            setDataProject(appPage.title);
          }
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <Link to={appPage.url}>
                <IonItem
                  className={
                    location.pathname.split('/')[2] ===
                    appPage.url.split('/')[2]
                      ? 'selected'
                      : ''
                  }
                  routerDirection='none'
                  lines='none'
                  detail={false}
                >
                  <IonIcon
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </Link>
              <IonList
                id='project-nav'
                className={
                  location.pathname.split('/')[2] === appPage.url.split('/')[2]
                    ? ''
                    : 'hidden'
                }
              >
                {appPage.options?.map((option, index) => {
                  return (
                    <Link to={option.url} key={index}>
                      <IonItem
                        className={
                          location.pathname === option.url
                            ? 'selected-sub-menu'
                            : ''
                        }
                        routerDirection='none'
                        lines='none'
                        detail={false}
                      >
                        <IonIcon
                          slot='start'
                          ios={option.iosIcon}
                          md={option.mdIcon}
                        />
                        <IonLabel>{option.title}</IonLabel>
                      </IonItem>
                    </Link>
                  );
                })}
              </IonList>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </>
  );
};

export default MenuLinks;
