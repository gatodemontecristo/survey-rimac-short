import { FaTimes } from 'react-icons/fa';

interface ItemRimacProps {
  text: string;
  fnClick: () => void;
}
export const ItemRimac = ({ text, fnClick }: ItemRimacProps) => {
  return (
    <div className='flex flex-row items-center justify-between py-2 px-4 bg-rimac-white border-2 rounded-full gap-3'>
      <span className='text-rimac-black'>{text}</span>
      <button className='cursor-pointer ' onClick={fnClick}>
        <FaTimes className='w-5 h-5 text-rimac-black' />
      </button>
    </div>
  );
};
