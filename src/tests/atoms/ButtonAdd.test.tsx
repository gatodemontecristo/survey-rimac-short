import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonAdd } from '../../components';

describe('ButtonAdd Component', () => {
  const mockOnClic = jest.fn();
  const defaultProps = {
    fnClick: mockOnClic,
    className: 'm-5',
    isNav: true,
    disabled: true,
  };
  it('it should render correctly with the initial props', () => {
    render(<ButtonAdd fnClick={mockOnClic} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button-circle');
    expect(button).not.toBeDisabled();
  });

  it('it should render the icon button', () => {
    const { container } = render(<ButtonAdd fnClick={mockOnClic} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('it should render with custom className', () => {
    render(<ButtonAdd {...defaultProps} />);

    expect(screen.getByRole('button')).toHaveClass('m-5');
  });
  it('it should call fnClick when button is clicked (default mode)', () => {
    render(<ButtonAdd fnClick={mockOnClic} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClic).toHaveBeenCalledTimes(1);
  });
  it('it should render the button as disabled', () => {
    render(<ButtonAdd {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('button-reverse');
  });
});
