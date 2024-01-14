import { useState } from 'react';
import { TabsProps } from '../../../../types/shell-item.types';
import { TabsContent } from '../../atoms/TabsContent';
import { TabsPill } from '../../atoms/TabsPill';
import './style.scss';
import { List } from '../../organisms/List';

export const TabsContainer = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePillClick = (index: number) => {
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
                <div className="title">
                  {item.content.title}
                </div>
                <div className="content">
                  <List items={item.content.items} title={item.content.title} />
                </div>
              </TabsContent>
            );
          })
        }
      </div>

    </div>
  );
}
