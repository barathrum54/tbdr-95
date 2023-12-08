import { useDesktopStore } from "../stores/desktop.store";
import { MenuItem } from "../types/menu-item.types";

class DesktopService {
  desktopStore = useDesktopStore.getState();

  addSelectedItem(item: MenuItem) {
    this.desktopStore.addSelectedItem(item);
  }
  resetSelectedItems() {
    this.desktopStore.resetSelectedItems();
  }
}

export default DesktopService;
