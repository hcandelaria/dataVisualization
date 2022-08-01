import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  analyticsOutline,
  analyticsSharp,
  logoGithub,
  informationCircleOutline,
  informationCircleSharp,
  logoPython,
  timerOutline,
  timerSharp,
  bulbOutline,
  bulbSharp,
  readerOutline,
  readerSharp,
  barChartOutline,
  barChartSharp,
  mapOutline,
  mapSharp,
  briefcaseOutline,
  briefcaseSharp,
} from "ionicons/icons";
import "./Menu.css";
import { useEffect, useState } from "react";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  sources: Source[];
  options?: Source[];
}

interface Source {
  title: string;
  url: string;
  iosIcon: any;
  mdIcon: any;
}

const appPages: AppPage[] = [
  {
    title: "Health Insurance Coverage",
    url: "/page/health/analysis",
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
    sources: [
      {
        title: "Repo",
        url: "https://github.com/hcandelaria/health-insurance-coverage",
        iosIcon: logoGithub,
        mdIcon: logoGithub,
      },
      {
        title: "Jupyter Notebook",
        url: "https://github.com/hcandelaria/health-insurance-coverage/blob/main/analysis/healthAnalysis.ipynb",
        iosIcon: logoPython,
        mdIcon: logoPython,
      },
      {
        title: "Kaggle",
        url: "https://www.kaggle.com/code/eamartey/health-insurance/data",
        iosIcon: bulbOutline,
        mdIcon: bulbSharp,
      },
      // {
      //   title: "Project Stack",
      //   url: "https://hcandelaria.com",
      //   iosIcon: informationCircleOutline,
      //   mdIcon: informationCircleSharp,
      // },
    ],
    options: [
      {
        title: "Analisys",
        url: "/page/health/analysis",
        iosIcon: barChartOutline,
        mdIcon: barChartSharp,
      },
      {
        title: "Thesis",
        url: "/page/health/thesis",
        iosIcon: readerOutline,
        mdIcon: readerSharp,
      },
      {
        title: "Map",
        url: "/page/health/map",
        iosIcon: mapOutline,
        mdIcon: mapSharp,
      },
    ],
  },
  {
    title: "Demo",
    url: "/page/demo",
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp,
    sources: [
      {
        title: "Demo1",
        url: "https://github.com/hcandelaria/health-insurance-coverage",
        iosIcon: logoGithub,
        mdIcon: logoGithub,
      },
      {
        title: "Demo2",
        url: "https://www.kaggle.com/code/eamartey/health-insurance/data",
        iosIcon: informationCircleOutline,
        mdIcon: informationCircleSharp,
      },
    ],
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const [dataProject, setDataProject] = useState("");

  return (
    <IonMenu contentId="main" id="menu-test" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Analysis</IonListHeader>
          {appPages.map((appPage, index) => {
            if (location.pathname === appPage.url && dataProject === "") {
              setDataProject(appPage.title);
            }
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname.split("/")[2] ===
                    appPage.url.split("/")[2]
                      ? "selected"
                      : ""
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
                <IonList
                  id="project-nav"
                  className={
                    location.pathname.split("/")[2] ===
                    appPage.url.split("/")[2]
                      ? ""
                      : "hidden"
                  }
                >
                  {appPage.options?.map((option, index) => {
                    return (
                      <IonItem
                        className={
                          location.pathname === option.url
                            ? "selected-sub-menu"
                            : ""
                        }
                        key={index}
                        routerLink={option.url}
                        routerDirection="none"
                        lines="none"
                        detail={false}
                      >
                        <IonIcon
                          slot="start"
                          ios={option.iosIcon}
                          md={option.mdIcon}
                        />
                        <IonLabel>{option.title}</IonLabel>
                      </IonItem>
                    );
                  })}
                </IonList>
              </IonMenuToggle>
            );
          })}
          <IonItem>
            <IonIcon slot="start" ios={timerOutline} md={timerSharp} />
            <IonLabel>More Coming Soon</IonLabel>
          </IonItem>
        </IonList>
        <IonList id="labels-list">
          <IonListHeader>{dataProject} Sources</IonListHeader>
          {appPages.map((page, index) => {
            return (
              <div
                key={index}
                className={location.pathname.split("/")[2] === page.url.split("/")[2] ? "" : "hidden"}
              >
                {page.sources.map((source, index) => {
                  return (
                    <IonItem
                      href={source.url}
                      target={"_black"}
                      lines="none"
                      key={index}
                    >
                      <IonIcon
                        slot="start"
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
        <IonList id="footer-list">
          <IonItem
            routerDirection="none"
            lines="none"
            detail={false}
            target={"_black"}
            href={"https://hcandelaria.com"}
          >
            <IonIcon slot="start" ios={briefcaseOutline} md={briefcaseSharp} />
            <IonLabel>My Portfolio</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
