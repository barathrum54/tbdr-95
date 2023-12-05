import React, { useState, useRef } from 'react';
import './style.scss';
import { StartMenuContainer } from '../../atoms/StartMenuContainer';
import { StartMenuItem } from '../../atoms/StartMenuItem';
import { MenuItem } from '../../../../types/menu-item.types';
import StartMenuService from '../../../services/start-menu.service';
import ShellService from '../../../services/shell.service';

type Props = {
  item: MenuItem;
};

export const StartMenuItemWrapper = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverDelay = 300;
  const startMenuService = new StartMenuService();
  const shellService = new ShellService();

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, hoverDelay);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setIsHovered(false);
    }, hoverDelay);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.subItems?.length) return;
    startMenuService.handleItemClick(item);
    shellService.handleItemClick(item);
  };
  return (
    <div
      className={`start-menu-item-wrapper`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleItemClick(props.item)}
    >
      <StartMenuItem item={props.item} />
      {
        props.item.subItems?.length && isHovered ?
          <div className="submenu">
            <StartMenuContainer>
              {props.item.subItems.map((subItem, index) => (
                <StartMenuItemWrapper key={index} item={subItem} />
              ))}
            </StartMenuContainer>
          </div>
          : null
      }
    </div>
  );
};
