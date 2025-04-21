// RadioRimac.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RadioRimac } from '../../components';

describe('RadioRimac', () => {
  const baseProps = {
    name: 'radio-group',
    value: 'opcion-1',
    label: 'Opción 1',
    checked: false,
    onChange: jest.fn(),
  };

  it('should render the label text', () => {
    render(<RadioRimac {...baseProps} />);
    expect(screen.getByText('Opción 1')).toBeInTheDocument();
  });

  it('should render an input of type radio', () => {
    render(<RadioRimac {...baseProps} />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('type', 'radio');
    expect(radio).toHaveAttribute('value', 'opcion-1');
  });

  it('should be checked if checked is true', () => {
    render(<RadioRimac {...baseProps} checked={true} />);
    const radio = screen.getByRole('radio') as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it('should call onChange with the value when clicked', async () => {
    const handleChange = jest.fn();
    render(<RadioRimac {...baseProps} onChange={handleChange} />);
    const radio = screen.getByRole('radio');
    await userEvent.click(radio);
    expect(handleChange).toHaveBeenCalledWith('opcion-1');
  });
});
