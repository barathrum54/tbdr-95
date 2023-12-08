import { IShellItem } from "./shell-item.types";

export type MenuItem = {
  id?: number;
  title: string;
  icon?: string;
  subItems?: MenuItem[];
  component?: IShellItem;
};
