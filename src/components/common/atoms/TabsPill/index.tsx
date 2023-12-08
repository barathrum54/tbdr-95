import './style.scss';

type TabsPillProps = {
  text: string;
}

export const TabsPill = (props: TabsPillProps) => {

  return (
    <div className="tabs-pill">
      <span>{props.text}</span>
    </div>
  );
}
