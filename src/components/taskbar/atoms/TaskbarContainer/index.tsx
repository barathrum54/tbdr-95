import React from 'react'
import './style.scss';
type Props = {

  children?: React.ReactNode;
}

export const TaskbarContainer = (props: Props) => {
  return (
    <div className='taskbar-container'>
      {props.children}
    </div>
  )
}