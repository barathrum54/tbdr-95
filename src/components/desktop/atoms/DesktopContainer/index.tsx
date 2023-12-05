import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  children?: ReactNode; // Define a children prop of type ReactNode
}

export const DesktopContainer = (props: Props) => {
  return (
    <div className='desktop-container'>
      {props.children}
    </div>
  )
}
