import React, { useState, useEffect } from 'react';

interface InputSearchProps {
  placeholder?: string;
  defaultValue?: string;
  onChange?: (formattedDate: string) => void;
}

export const InputSearch = ({
  placeholder,
  defaultValue,
  onChange,
}: InputSearchProps) => {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (defaultValue) {
      setDate(defaultValue);
    }
  }, [defaultValue]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawDate = event.target.value;
    const formattedDate = formatDate(rawDate);
    setDate(formattedDate);
    if (onChange) {
      onChange(formattedDate);
    }
  };

  const formatDate = (rawDate: string): string => {
    if (!rawDate) return '';
    const [year, month, day] = rawDate.split('-');
    return `${day}-${month}-${year}`;
  };

  const parseDate = (formattedDate: string): string => {
    if (!formattedDate) return '';
    const [day, month, year] = formattedDate.split('-');
    return `${year}-${month}-${day}`;
  };
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (date === '') {
      setIsFocused(false);
    }
  };
  return (
    <div className='relative w-full'>
      <input
        type='date'
        className='w-full px-4 pt-5 pb-3 md:text-xl text-lg   font-br-sonoma border border-gray-300 rounded focus:outline-none focus:border-blue-500 custom-date-input'
        value={parseDate(date)}
        onChange={handleDateChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=''
      />

      <label
        className={`absolute left-4  font-br-sonoma  transition-all duration-300 ease-in-out text-base top-1 ${
          isFocused || date ? ' text-blue-500' : 'text-gray-500 '
        }`}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {placeholder}
      </label>
    </div>
  );
};
