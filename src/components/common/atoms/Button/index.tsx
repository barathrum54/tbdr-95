import './style.scss';
type Props = {
  onClick?: () => void;
  icon?: string;
  text?: string;
  className?: string;
  variant?: 'default' | 'close';
}
export const Button = (props: Props) => {
  return (
    <button className={`button ${props.className} ${props.variant}`} onClick={props.onClick} >
      <div className="button-inner">
        {props.icon &&
          <div className="icon">
            {/* <img src="/img/win95-icon.png" alt="" /> */}
            <img src={props.icon} alt="" />
          </div>
        }

        <span>{props.text}</span>
      </div>
    </button >
  )
}