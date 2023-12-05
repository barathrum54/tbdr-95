import { MenuItem } from "../../../types/menu-item.types";
import { RADIO_BUTTON_VALUES } from "../../radio-button.maps";

export const ShutDown: MenuItem = {
  title: "Shut Down...",
  icon: "/img/shutdown.png",
  component: {
    type: "dialog",
    initialPosition: "center",
    props: {
      icon: "/img/shutdown.png",
      title: "Shut Down Windows 95",
      message: "Are you sure you want to:",
      hasOverlay: true,
      radioButtons: {
        name: "shutdown-options",
        items: [
          {
            text: "Navigate to Github Repository?",
            value: RADIO_BUTTON_VALUES.GITHUB,
          },
          {
            text: "Navigate to Linkedin Profile?",
            value: RADIO_BUTTON_VALUES.LINKEDIN,
          },
          { text: "Contact via email?", value: RADIO_BUTTON_VALUES.EMAIL },
        ],
      },
      buttons: [
        { text: "Yes", type: "accept", onClick: () => console.log("yes") },
        { text: "No", type: "cancel", onClick: () => console.log("no") },
      ],
    },
  },
};
