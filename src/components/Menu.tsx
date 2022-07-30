import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  analyticsOutline,
  analyticsSharp,
  logoGithub,
  informationCircleOutline,
  informationCircleSharp,
  bookmarkOutline,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Analysis",
    url: "/page/analysis",
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
  },
];

const links = [
  {
    title: "Repo",
    url: "https://github.com/hcandelaria/health-insurance-coverage",
    iosIcon: logoGithub,
    mdIcon: logoGithub,
  },
  {
    title: "Kaggle",
    url: "https://www.kaggle.com/code/eamartey/health-insurance/data",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Health Insurance Coverage</IonListHeader>
          {/* <IonNote>hi@ionicframework.com</IonNote> */}
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Sources</IonListHeader>
          {links.map((link, index) => (
            <a href={link.url} target="_blank">
              <IonItem lines="none" key={index}>
                <IonIcon slot="start" ios={link.iosIcon} md={link.mdIcon} />
                <IonLabel>{link["title"]}</IonLabel>
              </IonItem>
            </a>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
