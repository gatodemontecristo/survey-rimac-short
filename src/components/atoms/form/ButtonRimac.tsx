import clsx from 'clsx';
import '../../../styles/button-style.css';
import { FaAngleLeft } from 'react-icons/fa6';

interface ButtonRimacProps {
  text?: string;
  fnClick: () => void;
  className?: string;
  isNav?: boolean;
  disabled?: boolean;
}
export const ButtonRimac = ({
  text = '',
  fnClick,
  className,
  isNav = false,
  disabled = false,
}: ButtonRimacProps) => {
  return (
    <button
      onClick={fnClick}
      disabled={disabled}
      className={clsx(isNav ? 'button-reverse' : 'button-circle', className)}
    >
      {isNav ? (
        <FaAngleLeft className='size-5 button-text' />
      ) : (
        <span className='button-text'>{text}</span>
      )}
    </button>
  );
};
