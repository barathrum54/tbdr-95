import { MenuItem } from "../../../types/menu-item.types";

export const Run: MenuItem = {
  title: "Run...",
  icon: "/img/run.png",
  component: {
    type: "dialog",
    initialPosition: "center",
    props: {
      icon: "/img/run.png",
      title: "Run",
      message:
        "Type the name of a program, folder, document, or Internet resource, and Windows will open it for you.",
      inputs: [
        {
          label: "Open",
          placeholder: "",
        },
      ],
      buttons: [
        { text: "OK", type: "accept" },
        { text: "Cancel", type: "cancel" },
        { text: "Browse", type: "accept" },
      ],
    },
  },
};
