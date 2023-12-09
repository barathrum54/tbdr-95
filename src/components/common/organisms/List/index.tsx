import { TabsProps } from '../../../../types/shell-item.types';
import { TabsContent } from '../../atoms/TabsContent';
import { TabsPill } from '../../atoms/TabsPill';
import './style.scss';

export const List = (props: TabsProps) => {

  return (
    <div className="tabs-container">
      <div className="tabs-pills">
        {
          props.items.map((item, index) => {
            return (
              <TabsPill key={index} text={item.title} />
            );
          })
        }
      </div>
      <div className="tabs-contents">
        {
          props.items.map((item, index) => {
            return (
              <TabsContent key={index}>
                kontent
              </TabsContent>
            );
          })
        }
      </div>

    </div>
  );
}
