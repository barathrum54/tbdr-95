import './style.scss';
type Props = {
  children?: React.ReactNode;
  title: string;
};

export const DialogBox = (props: Props) => {
  const { children, title } = props;
  return (
    <div className="dialog-box">
      <div className="header">
        <div className="title">{title}</div>
        <div className='close-button'>
          <span>x</span>
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};