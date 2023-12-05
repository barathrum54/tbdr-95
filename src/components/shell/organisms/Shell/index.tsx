import { useShellStore } from '../../../../stores/shell.store';
import { ShellWrapper } from '../../molecules/ShellWrapper';
import './style.scss';
import { componentMapping } from '../../../../constants/component.maps';
import { IShellItem } from '../../../../types/shell-item.types';
import { ShellItem } from '../../atoms/ShellItem';

export const Shell = () => {
  const shellStore = useShellStore();
  const activeItems = shellStore.activeItems;
  const renderComponent = (item: IShellItem) => {
    if (!item) return null;
    const Component = item && componentMapping[item.type];
    return Component ? <Component {...item.props} /> : null;
  };

  return (
    <div className="shell">
      <ShellWrapper>
        {activeItems.map((item) => (
          <ShellItem item={item} key={item.title} initialPosition={item.component?.initialPosition || 'center'}>
            {item.component && renderComponent(item.component)}
          </ShellItem>
        ))}
      </ShellWrapper>
    </div>
  );
};
