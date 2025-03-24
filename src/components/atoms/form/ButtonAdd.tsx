import clsx from 'clsx';
import '../../../styles/button-style.css';
import { IoAdd } from 'react-icons/io5';

interface ButtonAddProps {
  fnClick: () => void;
  className?: string;
  isNav?: boolean;
}
export const ButtonAdd = ({
  fnClick,
  className,
  isNav = false,
}: ButtonAddProps) => {
  return (
    <button
      onClick={fnClick}
      className={clsx(isNav ? 'button-reverse' : 'button-circle', className)}
    >
      <IoAdd className='size-7 button-text' />
    </button>
  );
};
