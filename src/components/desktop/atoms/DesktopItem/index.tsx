import './style.scss';

type Props = {
  icon: string;
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

export const DesktopItem = (props: Props) => {
  return (
    <div className={`desktop-item ${props.isSelected ? 'selected' : ''}`} onClick={props.onClick}>
      <img className='icon' src={props.icon} alt="" />
      <span>{props.title}</span>
    </div>
  )
}
