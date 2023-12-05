import React from 'react'
import './style.scss';
type Props = {
  children?: React.ReactNode;
}

export const OverlayContainer = (props: Props) => {
  return (
    <div className="overlay-container">
      {props.children}
    </div>
  )
}