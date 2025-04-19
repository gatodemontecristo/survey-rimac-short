import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CheckboxRimac } from '../../components';
import { ItemOptionInfo } from '../../types';

const optionsMock: ItemOptionInfo[] = [
  { label: 'Opción A', value: 'a', info: 'Info extra A' },
  { label: 'Opción B', value: 'b', info: 'Info extra B' },
];

describe('CheckboxRimac', () => {
  it('should render all checkbox options', () => {
    render(
      <CheckboxRimac
        options={optionsMock}
        selectedValues={[]}
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText('Opción A')).toBeInTheDocument();
    expect(screen.getByLabelText('Opción B')).toBeInTheDocument();
  });

  it('should check and uncheck values on click', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    const { rerender } = render(
      <CheckboxRimac
        options={optionsMock}
        selectedValues={[]}
        onChange={onChangeMock}
      />,
    );

    const checkboxA = screen.getByLabelText('Opción A');
    await user.click(checkboxA);

    expect(onChangeMock).toHaveBeenCalledWith(['a']);

    rerender(
      <CheckboxRimac
        options={optionsMock}
        selectedValues={['a']}
        onChange={onChangeMock}
      />,
    );

    const updatedCheckboxA = screen.getByLabelText('Opción A');
    await user.click(updatedCheckboxA);
    expect(onChangeMock).toHaveBeenCalledWith([]);
  });

  it('should mark checkbox as checked when value is in selectedValues', () => {
    render(
      <CheckboxRimac
        options={optionsMock}
        selectedValues={['a']}
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText('Opción A')).toBeChecked();
    expect(screen.getByLabelText('Opción B')).not.toBeChecked();
  });
});
