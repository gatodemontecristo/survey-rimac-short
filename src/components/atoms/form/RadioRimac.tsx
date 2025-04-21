interface RadioRimacProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}
import React from 'react';
import '../../../styles/radio-style.css';

export const RadioRimac = React.forwardRef<HTMLInputElement, RadioRimacProps>(
  ({ value, label, checked, onChange }, ref) => {
    const id = `${label}-${value}`;
    return (
      <div className='flex items-center '>
        <label htmlFor={id} className='flex items-center cursor-pointer'>
          <input
            type='radio'
            id={id}
            ref={ref}
            value={value}
            checked={checked}
            onChange={() => onChange(value)}
          />
          <div className='custom-radio'></div>
          <span className='radio-label font-br-sonoma md:text-lg text-base'>
            {label}
          </span>
        </label>
      </div>
    );
  },
);
