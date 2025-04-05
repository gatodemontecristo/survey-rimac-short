import React from 'react';
import { ItemOption, ItemOptionInfo } from '../../../types';
import { nanoid } from 'nanoid';
import { InformativeMsg } from '../text';
interface CheckboxRimacProps {
  options: ItemOption[] | ItemOptionInfo[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
}

export const CheckboxRimac: React.FC<CheckboxRimacProps> = ({
  options,
  selectedValues,
  onChange,
}) => {
  const handleChange = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(
        selectedValues.filter((selectedValue) => selectedValue !== value),
      );
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className='flex flex-row md:text-center text-start items-center  flex-wrap  gap-x-7 gap-y-3'>
      {options.map((option) => (
        <label
          key={nanoid()}
          className='flex flex-row justify-center items-center space-x-2'
        >
          <input
            type='checkbox'
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value)}
            className='form-checkbox h-6 w-6 text-blue-600'
          />
          <span className='text-rimac-black md:text-lg text-base'>
            {option.label}
          </span>
          {'info' in option && option?.info && (
            <InformativeMsg message={option.info} position='top-right' />
          )}
        </label>
      ))}
    </div>
  );
};
