import './style.scss';

type TabsContentProps = {
  children?: React.ReactNode;
}

export const TabsContent = (props: TabsContentProps) => {

  return (
    <div className="tabs-content">
      <span>{props.children}</span>
    </div>
  );
}
