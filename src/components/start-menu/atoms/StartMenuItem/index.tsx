import React from 'react'
import './style.scss';
import { MenuItem } from '../../../../types/menu-item.types';
type Props = {
  item: MenuItem
}

export const StartMenuItem = (props: Props) => {

  return (
    <div className='start-menu-item'>
      <div className="icon">
        <img src={props.item.icon} alt="" />
      </div>
      <div className="text">
        {props.item.title}
      </div>
      <div className={`chevron ${props.item.subItems?.length ? 'active' : ''}`}>
        ▸
      </div>
    </div>
  )
}