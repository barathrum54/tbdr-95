import React from 'react'
import './style.scss';
import { useAppStore } from '../../../../stores/app.store';
import { Button } from '../../../common/atoms/Button';
type Props = {

}

export const StartButton = (props: Props) => {

  const { isStartMenuOpen, toggleStartMenu } = useAppStore()
  return (
    <Button onClick={toggleStartMenu} className={`start-button ${isStartMenuOpen ? 'active' : ''}`} icon="/img/win95-icon.png" text="Start" />
  )
}