import { useEffect, useState } from 'react';
import { RadioButton } from '../../atoms/RadioButton';
import { IRadioButton } from '../../../../types/shell-item.types';

type RadioButtonSetProps = {
  options: IRadioButton[];
  name: string;
  onSelectionChange?: (selectedValue: string) => void;
}

export const RadioButtonSet = ({ options, name, onSelectionChange }: RadioButtonSetProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);



  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onSelectionChange) {
      onSelectionChange(value);
    }
  }
  useEffect(() => {
    if (selectedValue === null && options.length > 0) {
      if (options[0].value) {
        handleChange(options[0].value);
      }
    }
  }, []);
  return (
    <div className="radio-button-set">
      {options.map(option => (
        option.value &&
        <RadioButton
          key={option.value}
          value={option.value}
          text={option.text}
          checked={selectedValue === option.value}
          onChange={() => {
            return option.value && handleChange(option.value)
          }}
        />
      ))}
    </div>
  );
}
