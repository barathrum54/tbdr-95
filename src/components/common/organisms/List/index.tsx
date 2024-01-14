import { ListProps } from '../../../../types/shell-item.types';
import './style.scss';

export const List = (props: ListProps) => {

  return (
    <div className="list-container">
      <div className="list-item">
        {
          props.items.map((item, index) => {
            return (
              <div key={index}>
                <div className="list-item-title">{item.title}</div>
                {/* <div className="list-item-content">{item.title}</div> */}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
