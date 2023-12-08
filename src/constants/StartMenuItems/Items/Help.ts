import { MenuItem } from "../../../types/menu-item.types";

export const Help: MenuItem = {
  title: "Help",
  icon: "/img/help.png",
  component: {
    type: "tabs",
    initialPosition: "center",
    initialSize: {
      width: 500,
      height: 400,
    },
    props: {
      title: "Help",
    },
  },
};
