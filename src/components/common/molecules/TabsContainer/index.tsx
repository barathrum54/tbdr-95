import { TabsProps } from '../../../../types/shell-item.types';
import { TabsContent } from '../../atoms/TabsContent';
import { TabsPill } from '../../atoms/TabsPill';
import './style.scss';

export const TabsContainer = (props: TabsProps) => {

  return (
    <div className="tabs-container">
      <div className="tabs-pills">
        <TabsPill text='tab1' />
      </div>
      <div className="tabs-contents">
        <TabsContent>
          content 1
        </TabsContent>
      </div>

    </div>
  );
}
