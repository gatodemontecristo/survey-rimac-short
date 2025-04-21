import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { InputRimac } from '../../components';
import { useState } from 'react';

describe('InputRimac', () => {
  it('should render with placeholder and initial value', () => {
    render(
      <InputRimac
        placeholder='Nombre'
        value=''
        type='text'
        onChange={() => {}}
      />,
    );
    expect(screen.getByText(/nombre/i)).toBeInTheDocument();
  });

  it('should call onChange when typing valid text input', async () => {
    const handleChange = jest.fn();
    render(
      <InputRimac
        placeholder='Nombre'
        value=''
        type='text'
        onChange={handleChange}
      />,
    );
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Juan');

    expect(handleChange).toHaveBeenCalledTimes(4);
    expect(handleChange).toHaveBeenCalledWith('J');
  });

  it('should not allow numbers or symbols in text type', async () => {
    const handleChange = jest.fn();
    render(
      <InputRimac
        placeholder='Texto'
        value=''
        type='text'
        onChange={handleChange}
      />,
    );
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Hola123!');

    expect(handleChange).toHaveBeenCalledTimes(4);
  });

  it('should allow only numbers, not text and everything in number type', async () => {
    const handleChange = jest.fn();

    const Wrapper = () => {
      const [value, setValue] = useState('');
      const handleWrapperChange = (val: string) => {
        handleChange(val);
        setValue(val);
      };

      return (
        <InputRimac
          placeholder='Edad'
          value={value}
          type='number'
          onChange={handleWrapperChange}
        />
      );
    };

    render(<Wrapper />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '12345N');

    expect(handleChange).toHaveBeenCalledTimes(4);
    expect(input).toHaveValue('1234');
  });

  it('should allow valid decimal numbers', async () => {
    const handleChange = jest.fn();

    const Wrapper = () => {
      const [value, setValue] = useState('');
      const handleWrapperChange = (val: string) => {
        handleChange(val);
        setValue(val);
      };

      return (
        <InputRimac
          placeholder='Precio'
          value={value}
          type='decimal'
          onChange={handleWrapperChange}
        />
      );
    };

    render(<Wrapper />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '12t3.45');
    expect(handleChange).toHaveBeenCalledTimes(6);
    expect(input).toHaveValue('123.45');
  });

  it('should update label position when focused and blurred', async () => {
    render(
      <InputRimac
        placeholder='Nombre'
        value=''
        type='text'
        onChange={() => {}}
      />,
    );
    const input = screen.getByRole('textbox');
    const label = screen.getByText(/nombre/i);
    expect(label).toHaveClass(
      'text-gray-500 -translate-y-1/2 top-1/2 text-base',
    );

    await userEvent.click(input);
    expect(label).toHaveClass('text-base top-1 text-blue-500');
  });
});
