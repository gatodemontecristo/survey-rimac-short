import clsx from 'clsx';
import { ReactFormProps } from '../../../types';
import { ErrorMsg, InputSearch } from '../../atoms';
import { Controller } from 'react-hook-form';

interface DateFormPops extends ReactFormProps {
  placeholder: string;
  className?: string;
}
export const DateForm = ({
  name,
  control,
  message,
  className,
  ...props
}: DateFormPops) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-start justify-center text-justify gap-2',
        className,
      )}
    >
      <div className={clsx('flex flex-row flex-wrap w-full')}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <InputSearch
              {...props}
              defaultValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {message && <ErrorMsg message={message}></ErrorMsg>}
    </div>
  );
};
