import { Source } from "./Source";

export interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  sources: Source[];
  options?: Source[];
} 