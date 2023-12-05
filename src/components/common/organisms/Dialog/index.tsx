import { DialogProps } from "../../../../types/shell-item.types";
import { DialogBox } from "../../molecules/DialogBox";


export const Dialog = (props: DialogProps) => {
  const { hasOverlay } = props;
  return (


    <DialogBox {...props} />

  )
};