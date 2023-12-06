import { MenuItem } from "../types/menu-item.types";
import { useShellStore } from "../stores/shell.store";
import { actionMapping } from "../constants/action.maps";

class ShellService {
  shellStore = useShellStore.getState();

  handleItemClick(item: MenuItem) {
    //TODO: check if item is already active
    const activeItem = this.shellStore.activeItems.find(
      (i) => i.component?.props.title === item.title
    );

    if (item.component && !activeItem) {
      this.shellStore.addActiveItem(item);
    }
  }
  closeActiveItem(title: string) {
    const item = this.shellStore.activeItems.find(
      (i) => i.component?.props.title === title
    );
    if (item) {
      this.shellStore.removeActiveItem(item);
    }
  }
  executeAction(action: string) {
    switch (action) {
      case "github":
        actionMapping.github.callback();
        break;
      case "linkedin":
        actionMapping.linkedin.callback();
        break;
      case "email":
        actionMapping.email.callback();
        break;
      default:
        break;
    }
  }
  bringToFront() {
    return this.shellStore.zIndexCounter++;
  }
}

export default ShellService;
