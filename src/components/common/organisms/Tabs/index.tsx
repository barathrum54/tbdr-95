import { TabsProps } from "../../../../types/shell-item.types";


export const Tabs = (props: TabsProps) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      {props.title}
    </div>
  )
};