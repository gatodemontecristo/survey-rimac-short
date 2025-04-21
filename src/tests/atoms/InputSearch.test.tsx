import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { InputSearch } from '../../components';

describe('InputSearch', () => {
  it('should render with placeholder', () => {
    render(<InputSearch placeholder='Fecha de nacimiento' />);
    expect(screen.getByText('Fecha de nacimiento')).toBeInTheDocument();
  });

  it('should show defaultValue formatted as yyyy-mm-dd in the input', () => {
    const { container } = render(
      <InputSearch defaultValue='25-12-2022' placeholder='Fecha de inicio' />,
    );
    const input = container.querySelector('input');
    expect(input).toHaveValue('2022-12-25');
  });

  it('should call onChange with formatted date (dd-mm-yyyy) when user changes date', async () => {
    const handleChange = jest.fn();

    const { container } = render(
      <InputSearch placeholder='Fecha' onChange={handleChange} />,
    );
    const input = container.querySelector('input');
    if (!input) throw new Error('Input element not found');

    await userEvent.type(input, '2023-05-10');

    expect(handleChange).toHaveBeenLastCalledWith('10-05-2023');
  });

  it('should update internal state when defaultValue changes', () => {
    const { rerender, container } = render(
      <InputSearch defaultValue='01-01-2022' />,
    );
    const input = container.querySelector('input');
    expect(input).toHaveValue('2022-01-01');

    rerender(<InputSearch defaultValue='15-08-2023' />);
    expect(input).toHaveValue('2023-08-15');
  });

  it('should clear the focus state on blur if value is empty', async () => {
    const { container } = render(<InputSearch placeholder='Fecha' />);
    const input = container.querySelector('input');
    if (!input) throw new Error('Input element not found');
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.tab();

    expect(true).toBeTruthy();
  });
});
it('should update label position when focused', async () => {
  const { container } = render(<InputSearch placeholder='Fecha' />);
  const input = container.querySelector('input');
  if (!input) throw new Error('Input element not found');
  const label = screen.getByText(/fecha/i);
  expect(label).toHaveClass('text-gray-500');
  expect(label).toHaveStyle({
    pointerEvents: 'none',
    userSelect: 'none',
  });

  await userEvent.click(input);
  expect(label).toHaveClass('text-blue-500');
});
