import { DesktopBackground } from '../../atoms/DesktopBackground';
import { DesktopContainer } from '../../atoms/DesktopContainer';
import './style.scss';
type Props = {
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
}

export const DesktopWrapper = (props: Props) => {


  return (
    <div className='desktop-wrapper'>
      <DesktopContainer>
        {props.children}
      </DesktopContainer>
      <DesktopBackground />
    </div>
  )
}