import { MenuItem } from "../../types/menu-item.types";
import { useShellStore } from "../../stores/shell.store";
import { IShellItem } from "../../types/shell-item.types";

class ShellService {
  shellStore = useShellStore.getState();
  constructor() {}

  handleItemClick(item: MenuItem) {
    //TODO: check if item is already active
    //TODO: Focus item if already active

    console.log(item);
    this.shellStore.addActiveItem(item);
  }
}

export default ShellService;
