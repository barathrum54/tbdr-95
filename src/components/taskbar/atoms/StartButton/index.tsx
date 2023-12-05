import React from 'react'
import './style.scss';
import { useAppStore } from '../../../../stores/app.store';
type Props = {

}

export const StartButton = (props: Props) => {

  const { isStartMenuOpen, toggleStartMenu } = useAppStore()
  return (
    <button onClick={toggleStartMenu} className={`start-button ${isStartMenuOpen ? 'active' : ''}`}>
      <div className="start-button-inner">
        <div className="icon">
          <img src="/img/win95-icon.png" alt="" />
        </div>
        <span>Start</span>
      </div>
    </button>
  )
}