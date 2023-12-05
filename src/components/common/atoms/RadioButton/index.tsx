import './style.scss';
type Props = {
  value: string;
  text: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

export const RadioButton = (props: Props) => {
  return (
    <>
      <div className="radio-button">
        <input type="radio" name="radio-buttons" id={props.value} checked={props.checked} onChange={
          () => {
            if (props.onChange) props.onChange(props.value);
          }
        } />
        <div className="custom-radio">
          <div className="checked"></div>
        </div>
        <label htmlFor={props.value}>{props.text}</label>
      </div>
    </>
  )
}