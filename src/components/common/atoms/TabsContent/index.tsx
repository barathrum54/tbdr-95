import './style.scss';

type TabsContentProps = {
  children?: React.ReactNode;
  isActive?: boolean;
}

export const TabsContent = (props: TabsContentProps) => {

  return (
    <div className={`tabs-content ${props.isActive ? 'active' : ''}`}>
      {props.children}
    </div>
  );
}
