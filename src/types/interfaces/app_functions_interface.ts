import { ReactNode } from "react";

export interface nav_menu {
  navDataset: {
    id: number;
    url: string;
    label: string;
    value: string;
    icon: ReactNode;
    hasSubMenu: boolean;
    subMenu: {
      url: string;
      label: string;
      value: string;
      icon: string;
      id: number;
    }[];
  }[];
}
