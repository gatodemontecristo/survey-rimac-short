import { nanoid } from 'nanoid';
import { ItemOption, ReactFormProps } from '../../../types';
import { ErrorMsg } from '../text';
import { Controller } from 'react-hook-form';
import clsx from 'clsx';
interface CheckboxAloneProps extends ReactFormProps {
  option: ItemOption;
  className?: string;
}
export const CheckboxAlone = ({
  option,
  name,
  control,
  message,
  className,
}: CheckboxAloneProps) => {
  return (
    <div
      className={clsx(
        'flex flex-row text-center items-center  flex-wrap  gap-x-7 gap-y-3',
        className,
      )}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label
            key={nanoid()}
            className='flex flex-row justify-center items-center space-x-2'
          >
            <input
              type='checkbox'
              checked={field.value}
              onChange={field.onChange}
              className='form-checkbox h-6 w-6 text-blue-600'
            />
            <span className='text-rimac-black md:text-lg text-base'>
              {option.label}
            </span>
          </label>
        )}
      />
      {message && <ErrorMsg message={message}></ErrorMsg>}
    </div>
  );
};
