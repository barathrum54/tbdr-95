import { useState } from 'react';
import { IButton, DialogProps } from '../../../../types/shell-item.types';
import ShellService from '../../../../services/shell.service';
import { Button } from '../../atoms/Button';
import './style.scss';
import { RadioButtonSet } from '../RadioButtonSet';

export const DialogBox = (props: DialogProps) => {
  const { title, radioButtons, message, buttons, defaultAction } = props;
  const [selectedRadioButton, setSelectedRadioButton] = useState<string | null>(null);


  const shellService = new ShellService();
  const handleCloseButtonClick = () => {
    shellService.closeActiveItem(title);
  }

  const handleActionButtonClick = (button: IButton) => {
    return () => {
      if (button.type === 'cancel') handleCloseButtonClick();
      if (button.type === 'accept') {
        if (radioButtons && selectedRadioButton) {
          shellService.executeAction(selectedRadioButton);
          handleCloseButtonClick();
        }
        if (defaultAction) {
          shellService.executeAction(defaultAction);
          handleCloseButtonClick();
        }

      }
    }
  }
  const handleRadioButtonChange = (value: string) => {
    setSelectedRadioButton(value);
  }

  return (
    <div className={`dialog-box ${props.hasOverlay ? 'overlay' : ''}`} >
      <div className="content">
        <div className="icon">
          <img src={props.icon} alt="" />
        </div>
        <div className="message">
          {message}
        </div>
        <div className="content-body">
          {
            radioButtons &&
            <RadioButtonSet options={radioButtons.items} name="radio-buttons" onSelectionChange={handleRadioButtonChange} />
          }
        </div>

      </div>
      <div className="actions">
        {buttons && (
          <div className="buttons">
            {buttons.map((button: IButton) => (
              button && <Button onClick={handleActionButtonClick(button)} text={button.text} key={button.text} />
            ))}
          </div>
        )}
      </div>
    </div >
  );

};