import { MenuItem } from "../types/menu-item.types";
import { RADIO_BUTTON_VALUES } from "./radio-button.maps";

export const menuItems: MenuItem[] = [
  {
    title: "Programs",
    icon: "/img/programs.png",
    subItems: [
      { title: "Accessories", icon: "/img/accessories.png" },
      { title: "StartUp", icon: "/img/startup.png" },
    ],
  },
  {
    title: "Documents",
    icon: "/img/documents.png",
    subItems: [
      { title: "Accessories", icon: "/img/accessories.png" },
      {
        title: "StartUp",
        icon: "/img/startup.png",
      },
    ],
  },
  { title: "Settings", icon: "/img/settings.png" },
  { title: "Find", icon: "/img/find.png" },
  { title: "Help", icon: "/img/help.png" },
  { title: "Run...", icon: "/img/run.png" },
  {
    title: "Shut Down...",
    icon: "/img/shutdown.png",
    component: {
      type: "dialog",
      props: {
        title: "Shut Down Tbdr-95",
        message: "Are you sure you want to:",
        radioButtons: [
          { text: "Navigate to Github", value: RADIO_BUTTON_VALUES.GITHUB },
          { text: "Navigate to Linkedin", value: RADIO_BUTTON_VALUES.LINKEDIN },
          { text: "Contact via email", value: RADIO_BUTTON_VALUES.EMAIL },
        ],
        buttons: [
          { text: "Yes", type: "accept" },
          { text: "No", type: "cancel" },
        ],
      },
    },
  },
];
