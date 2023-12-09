import { useEffect, useState, useRef } from 'react';
import './style.scss';
import ShellService from '../../../../services/shell.service';
import { Button } from '../../../common/atoms/Button';
import { MenuItem } from '../../../../types/menu-item.types';

type Props = {
  children: React.ReactNode;
  initialPosition?: string;
  item: MenuItem;
};

export const ShellItem = (props: Props) => {
  const component = props.item.component;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isRendered, setIsRendered] = useState(false);
  const shellItemRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const shellService = new ShellService();
  const [zIndex, setZIndex] = useState(shellService.bringToFront());
  const [closeButtonDisabled, setCloseButtonDisabled] = useState(false);

  useEffect(() => {
    setCloseButtonDisabled(props.item.component?.closeButtonDisabled || false);
    if (props.item.component?.initialSize?.width && props.item.component?.initialSize?.height) {
      setItemSize(props.item.component?.initialSize?.width, props.item.component?.initialSize?.height);
    }
    setIsFocused(true);
  }, []);

  const updateZIndex = () => {
    const newZIndex = shellService.bringToFront();
    setZIndex(newZIndex);
  };
  const setItemSize = (width: number, height: number) => {
    const shellItemElement = shellItemRef.current;
    if (shellItemElement) {
      shellItemElement.style.width = `${width}px`;
      shellItemElement.style.height = `${height}px`;
    }
  }
  const setItemPosition = (x: number, y: number) => {
    setPosition({ x, y });
  };

  const convertPosition = (windowWidth: number, windowHeight: number, itemWidth: number, itemHeight: number) => {
    let pos = { x: 0, y: 0 };
    if (props.initialPosition === "center") {
      pos.x = (windowWidth - itemWidth) / 2;
      pos.y = (windowHeight - itemHeight) / 2;
    }
    if (props.initialPosition === "bottom-left") {
      pos.x = 5;
      pos.y = (windowHeight - itemHeight) / (1.09);
    }
    return pos;
  };
  const handleCloseButtonClick = () => {
    component && shellService.closeActiveItem(component.props.title);
  }
  useEffect(() => {
    if (isFocused || dragging) {
      updateZIndex();
    }
  }, [isFocused, dragging]);

  useEffect(() => {
    const shellItemElement = shellItemRef.current;
    if (shellItemElement) {
      const { clientWidth, clientHeight } = shellItemElement;
      console.log(shellItemElement)
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newPos = convertPosition(windowWidth, windowHeight, clientWidth, clientHeight);
      setItemPosition(newPos.x, newPos.y);
      setIsRendered(true);
    }
  }, [props.initialPosition]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.target && (e.target as HTMLElement).closest('.header')) {
      setDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
    setIsFocused(true);
    e.preventDefault(); // Prevent text selection
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPosition({ x: newX, y: newY });
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shellItemRef.current &&
        !shellItemRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, dragStart.x, dragStart.y]);
  return (
    <>
      <div onMouseDown={onMouseDown} ref={shellItemRef} className={`shell-item ${!isRendered ? 'hidden' : ''} ${isFocused ? 'focused' : ''} `} style={{ left: position.x, top: position.y, zIndex: zIndex }}>
        <div className={`header ${dragging ? 'drag' : ''}`} >
          <div className="title">{props.item.title}</div>
          <Button variant='close' onClick={handleCloseButtonClick} text='X' disabled={closeButtonDisabled} />
        </div>

        {props.children}
      </div>
    </>
  );
};
