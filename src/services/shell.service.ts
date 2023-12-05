import { MenuItem } from "../types/menu-item.types";
import { useShellStore } from "../stores/shell.store";
import { actionMapping } from "../constants/action.maps";

class ShellService {
  shellStore = useShellStore.getState();

  handleItemClick(item: MenuItem) {
    //TODO: check if item is already active
    //TODO: Focus item if already active

    console.log(item);
    this.shellStore.addActiveItem(item);
  }
  closeActiveItem(title: string) {
    const item = this.shellStore.activeItems.find(
      (i) => i.component?.props.title === title
    );
    console.log(item, title);
    if (item) {
      console.log(item);
      this.shellStore.removeActiveItem(item);
    }
  }
  executeAction(action: string) {
    console.log("executeAction", action);
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
}

export default ShellService;
