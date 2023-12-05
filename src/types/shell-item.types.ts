export type IShellItem = {
  type: "dialog";
  props: DialogProps;
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
  closeButtonDisabled?: boolean;
  hasOverlay?: boolean;
  radioButtons?: {
    name: string;
    items: IRadioButton[];
  };
  inputs?: IInput[];
  defaultAction?: string;
  buttons: IButton[];
};
