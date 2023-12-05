import { MenuItem } from "../../types/menu-item.types";
import { useAppStore } from "../../stores/app.store";

class StartMenuService {
  appStore = useAppStore.getState();
  constructor() {}

  handleItemClick(item: MenuItem) {
    this.appStore.setStartMenu(false);
  }
}

export default StartMenuService;
