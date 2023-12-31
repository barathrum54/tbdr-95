import { useState } from 'react';
import { TabsProps } from '../../../../types/shell-item.types';
import { TabsContent } from '../../atoms/TabsContent';
import { TabsPill } from '../../atoms/TabsPill';
import './style.scss';

export const TabsContainer = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePillClick = (index: number) => {
    console.log('index', index);
    setActiveTab(index);
  }

  return (
    <div className="tabs-container">
      <div className="tabs-pills">
        {
          props.items.map((item, index) => {
            return (
              <TabsPill isActive={index === activeTab} onClick={() => handlePillClick(index)} key={index} text={item.title} />
            );
          })
        }
      </div>
      <div className="tabs-contents">
        {
          props.items.map((item, index) => {
            return (
              <TabsContent isActive={activeTab === index} key={index}>
                {index}
              </TabsContent>
            );
          })
        }
      </div>

    </div>
  );
}
