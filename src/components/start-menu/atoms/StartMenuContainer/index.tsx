import React from 'react'
import './style.scss';
import { useAppStore } from '../../../../stores/app.store';
type Props = {
  children?: React.ReactNode;
}

export const StartMenuContainer = (props: Props) => {

  const { isStartMenuOpen } = useAppStore()
  return (
    <div className={`start-menu-container ${isStartMenuOpen ? 'active' : ''} `}>
      {props.children}
    </div>
  )
}