import React from 'react'
import './style.scss';
type Props = {

  children?: React.ReactNode;
}

export const SystemTrayContainer = (props: Props) => {
  return (
    <div className='system-tray-container'>
      {props.children}
    </div>
  )
}