export type IShellItem = {
  type: "dialog";
  props: DialogProps;
};

export type RadioButton = {
  text: string;
  value?: string;
};

export type Button = {
  text: string;
  type: "accept" | "cancel";
};

export type DialogProps = {
  title: string;
  message: string;
  radioButtons: RadioButton[];
  buttons: Button[];
};
