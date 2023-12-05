import { DesktopBackground } from '../../atoms/DesktopBackground';
import { DesktopContainer } from '../../atoms/DesktopContainer';
import './style.scss';
type Props = {}

export const DesktopWrapper = (props: Props) => {
  return (
    <div className='desktop-wrapper'>
      <DesktopContainer>
      </DesktopContainer>
      <DesktopBackground />
    </div>
  )
}