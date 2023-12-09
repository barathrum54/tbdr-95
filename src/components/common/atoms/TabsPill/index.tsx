import './style.scss';

type TabsPillProps = {
  text: string;
  isActive?: boolean;
  onClick?: (index: number) => void;
  key: number;
}

export const TabsPill = (props: TabsPillProps) => {

  return (
    <div className={`tabs-pill ${props.isActive ? 'active' : ''}`} onClick={
      () => {
        if (props.onClick) {
          props.onClick(props.key);
        }
      }
    }>
      <span>{props.text}</span>
    </div>
  );
}
