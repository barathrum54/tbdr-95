import './style.scss';
type Props = {
  onClick?: () => void;
  icon?: string;
  text?: string;
  className?: string;
  variant?: 'default' | 'close';
  disabled?: boolean;
}
export const Button = (props: Props) => {
  return (
    <button className={`button ${props.className} ${props.variant} ${props.disabled ? 'disabled' : ''}`} onClick={props.onClick}
      disabled={props.disabled}
    >
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