import { IShellItem } from "./shell-item.types";

export type MenuItem = {
  title: string;
  icon?: string;
  subItems?: MenuItem[];
  component?: IShellItem;
};
