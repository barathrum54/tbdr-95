import React, { useRef } from 'react'
import './style.scss';
import { useAppStore } from '../../../../stores/app.store';
import { StartMenuContainer } from '../../atoms/StartMenuContainer';
import { useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node) && (!event.target || !(event.target as HTMLElement).closest('.start-button'))) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

type Props = {
  children?: React.ReactNode;
}

export const StartMenuWrapper = (props: Props) => {

  const { isStartMenuOpen, setStartMenu } = useAppStore()
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => {
    setStartMenu(false);
  });

  return (
    <div ref={wrapperRef} className={`start-menu-wrapper ${isStartMenuOpen ? 'active' : ''}`}>
      <div className='start-menu-banner'>
        <div className="text">
          <h5>Windows</h5><span>95</span>
        </div>
      </div>
      <StartMenuContainer>
        {props.children}
      </StartMenuContainer>
    </div>
  )
}