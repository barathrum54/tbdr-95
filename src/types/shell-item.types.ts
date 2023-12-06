export type BaseShellItem = {
  type: "dialog" | "tabs";
  closeButtonDisabled?: boolean;
  initialPosition?:
    | "center"
    | "top-center"
    | "bottom-center"
    | "left-center"
    | "right-center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
};
export interface DialogShellItem extends BaseShellItem {
  type: "dialog";
  props: DialogProps;
}
export interface TabsShellItem extends BaseShellItem {
  type: "tabs";
  props: TabsProps;
}
export type IShellItem = DialogShellItem | TabsShellItem;

export type IRadioButton = {
  text: string;
  value?: string;
  checked?: boolean;
};

export type IButton = {
  text: string;
  type: "accept" | "cancel";
  onClick?: () => void;
};
export type IInput = {
  label: string;
  placeholder?: string;
};
export type DialogProps = {
  icon?: string;
  title: string;
  message: string;
  hasOverlay?: boolean;
  radioButtons?: {
    name: string;
    items: IRadioButton[];
  };
  inputs?: IInput[];
  defaultAction?: string;
  buttons: IButton[];
};
export type TabsProps = {
  title: string;
};
