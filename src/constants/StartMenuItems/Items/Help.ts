import { MenuItem } from "../../../types/menu-item.types";

export const Help: MenuItem = {
  title: "Help",
  icon: "/img/help.png",
  component: {
    type: "tabs",
    initialPosition: "center",
    props: {
      title: "Help",
    },
  },
};
