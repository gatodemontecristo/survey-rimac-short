import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { TailwindPosition } from '../../../types';

interface InformativeMsgProps {
  message: string;
  position?: TailwindPosition;
}

export const InformativeMsg: React.FC<InformativeMsgProps> = ({
  message,
  position = 'top-right',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const toggleMessage = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      messageRef.current &&
      !messageRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const positionClasses = {
    'top-left': 'top-0 left-0 transform -translate-y-full',
    'top-right': 'top-0 right-0 transform -translate-y-full',
    'bottom-left': 'bottom-0 left-0 transform translate-y-full',
    'bottom-right': 'bottom-0 right-0 transform translate-y-full',
  };

  return (
    <div className='relative inline-block'>
      <button
        onClick={toggleMessage}
        className='text-rimac-grey  focus:outline-none cursor-pointer'
      >
        <AiOutlineInfoCircle size={24} />
      </button>
      {isVisible && (
        <div
          ref={messageRef}
          className={`absolute ${positionClasses[position]} mt-2 w-64 p-4 bg-black text-white border border-gray-700 rounded-lg shadow-lg z-90`}
        >
          <p className='text-sm'>{message}</p>
        </div>
      )}
    </div>
  );
};
