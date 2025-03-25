import { CheckboxRimac, ErrorMsg } from '../../atoms';
import { ItemOption, ItemOptionInfo, ReactFormProps } from '../../../types';
import { Controller } from 'react-hook-form';

interface MultiCheckboxFormProps extends ReactFormProps {
  options: ItemOption[] | ItemOptionInfo[];
}
export const MultiCheckboxForm = ({
  options,
  control,
  message,
  name,
}: MultiCheckboxFormProps) => {
  return (
    <div className='p-4'>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CheckboxRimac
            options={options}
            selectedValues={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {message && <ErrorMsg message={message}></ErrorMsg>}
    </div>
  );
};
