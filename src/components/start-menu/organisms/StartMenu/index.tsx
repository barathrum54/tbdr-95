import { StartMenuItemWrapper } from '../../molecules/StartMenuItemWrapper';
import { StartMenuWrapper } from '../../molecules/StartMenuWrapper';
import { menuItems } from '../../../../constants/start-menu.items';
type Props = {}


export const StartMenu = (props: Props) => {
  return (
    <StartMenuWrapper>
      {menuItems.map(item => (
        <StartMenuItemWrapper key={item.title} item={item} />
      ))}
    </StartMenuWrapper>
  );
}
