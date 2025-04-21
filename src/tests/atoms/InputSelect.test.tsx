import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { InputSelect, Option } from '../../components';

const options: Option[] = [
  { value: 'uno', label: 'Uno' },
  { value: 'dos', label: 'Dos' },
];

describe('InputSelect', () => {
  it('renders with placeholder and options', () => {
    render(
      <InputSelect
        options={options}
        placeholder='Selecciona una opción'
        value={null}
        onChange={() => {}}
      />,
    );

    expect(screen.getByText('Selecciona una opción')).toBeInTheDocument();
  });

  it('calls onChange when an option is selected', async () => {
    const handleChange = jest.fn();
    render(
      <InputSelect
        options={options}
        placeholder='Selecciona una opción'
        value={null}
        onChange={handleChange}
      />,
    );

    const select = screen.getByRole('combobox');
    await userEvent.click(select);

    const option = screen.getByText('Dos');
    await userEvent.click(option);

    expect(handleChange.mock.calls[0][0]).toEqual({
      value: 'dos',
      label: 'Dos',
    });
  });

  it('should apply label style when focused', async () => {
    render(
      <InputSelect
        options={options}
        placeholder='Selecciona una opción'
        value={null}
        onChange={() => {}}
      />,
    );

    const select = screen.getByRole('combobox');
    const label = screen.getByText('Selecciona una opción');

    await userEvent.click(select);

    expect(label.className).toContain('text-sm');
    expect(label.className).toContain('text-blue-500');
  });

  it('should disable the select if isDisabled is true', async () => {
    const { container } = render(
      <InputSelect
        options={options}
        placeholder='Selecciona una opción'
        value={null}
        onChange={() => {}}
        isDisabled
      />,
    );
    const select = container.querySelector('input');
    expect(select).toBeDisabled();
  });
});
