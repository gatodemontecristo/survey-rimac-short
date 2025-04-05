import clsx from 'clsx';
import '../../../styles/button-style.css';
import { IoAdd } from 'react-icons/io5';

interface ButtonAddProps {
  fnClick: () => void;
  className?: string;
  isNav?: boolean;
  disabled?: boolean;
}
export const ButtonAdd = ({
  fnClick,
  className,
  isNav = false,
  disabled = false,
}: ButtonAddProps) => {
  return (
    <button
      onClick={fnClick}
      disabled={disabled}
      className={clsx(isNav ? 'button-reverse' : 'button-circle', className)}
    >
      <IoAdd className='size-7 button-text' />
    </button>
  );
};
