import { DesktopWrapper } from '../../molecules/DesktopWrapper';
import './style.scss';
import { desktopItems } from '../../../../constants/desktop.items';
import { DesktopItem } from '../../atoms/DesktopItem';

type Props = {}

export const Desktop = (props: Props) => {
  return (
    <>
      <DesktopWrapper>
        {desktopItems.map(item => (
          <DesktopItem key={item.title} icon={item.icon || ''} title={item.title} />
        ))
        }
      </DesktopWrapper>
    </>
  )
}