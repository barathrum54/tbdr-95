import './style.scss';

type Props = {
  icon: string;
  title: string;
}

export const DesktopItem = (props: Props) => {
  return (
    <div className='desktop-item'>
      <img className='icon' src={props.icon} alt="" />
      <span>{props.title}</span>
    </div>
  )
}
