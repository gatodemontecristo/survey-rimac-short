import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import '@testing-library/jest-dom';

import { CheckboxAlone } from '../../components';

const Wrapper = ({
  name = 'testCheckbox',
  label = 'Opción de prueba',
  message,
}: {
  name?: string;
  label?: string;
  message?: string;
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      [name]: false,
    },
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <CheckboxAlone
        option={{ label, value: 'test' }}
        name={name}
        control={control}
        message={message}
      />
    </form>
  );
};

describe('CheckboxAlone', () => {
  it('should render the checkbox with label', () => {
    render(<Wrapper />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Opción de prueba')).toBeInTheDocument();
  });

  it('should toggle the checkbox when clicked', async () => {
    render(<Wrapper />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should show error message when message is passed', () => {
    render(<Wrapper message='Este campo es obligatorio' />);
    expect(screen.getByText(/este campo es obligatorio/i)).toBeInTheDocument();
  });
});
