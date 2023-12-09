import { useEffect, useState } from 'react';
import { DesktopWrapper } from '../../molecules/DesktopWrapper';
import './style.scss';
import { desktopItems } from '../../../../constants/desktop.items';
import { DesktopItem } from '../../atoms/DesktopItem';
import DesktopService from '../../../../services/desktop.service';
import { MenuItem } from '../../../../types/menu-item.types';
import { useDesktopStore } from '../../../../stores/desktop.store';

export const Desktop = () => {
  const desktopService = new DesktopService();
  const desktopStore = useDesktopStore();
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [clickTimeout, setClickTimeout] = useState<number | null>(null);

  useEffect(() => {
    setSelectedItems(desktopStore.selectedItems);
  }, [desktopStore.selectedItems]);

  const handleItemClick = (item: MenuItem) => {
    if (clickTimeout) {
      // Double click detected
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      handleDoubleClick(item);
    } else {
      // Single click handling
      desktopService.resetSelectedItems();
      desktopService.addSelectedItem(item);

      setClickTimeout(window.setTimeout(() => {
        setClickTimeout(null);
      }, 500));
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log('click outside')
      if (event.target && !(event.target as HTMLElement).closest('.desktop-item')) {
        desktopService.resetSelectedItems();
        setSelectedItems([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [desktopService]);
  const handleDoubleClick = (item: MenuItem) => {
    console.log('Double Clicked:', item.title);
    
  };

  return (
    <>
      <DesktopWrapper >
        {desktopItems.map(item => (
          <DesktopItem
            onClick={() => handleItemClick(item)}
            key={item.title}
            icon={item.icon || ''}
            title={item.title}
            isSelected={selectedItems.includes(item)}
          />
        ))}
      </DesktopWrapper>
    </>
  );
};
