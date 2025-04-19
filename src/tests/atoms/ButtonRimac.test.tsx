import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonRimac } from '../../components';

describe('ButtonRimac Component', () => {
  const mockOnClic = jest.fn();
  const defaultProps = {
    text: 'Default Text',
    fnClick: mockOnClic,
    className: 'm-5',
    isNav: true,
    disabled: true,
  };
  it('it should render correctly with the initial props', () => {
    render(<ButtonRimac fnClick={mockOnClic} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button-circle');
    expect(button).not.toBeDisabled();
  });

  it('it should render the span text', () => {
    const { container } = render(<ButtonRimac fnClick={mockOnClic} />);
    const spanBtn = container.querySelector('span');
    expect(spanBtn).toBeInTheDocument();
    expect(spanBtn).toHaveClass('button-text');
  });

  it('it should render the icon button', () => {
    const { container } = render(<ButtonRimac {...defaultProps} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('it should render with custom className', () => {
    render(<ButtonRimac {...defaultProps} />);

    expect(screen.getByRole('button')).toHaveClass('m-5');
  });
  it('it should call fnClick when button is clicked (default mode)', () => {
    render(<ButtonRimac fnClick={mockOnClic} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClic).toHaveBeenCalledTimes(1);
  });
  it('it should render the button as disabled', () => {
    render(<ButtonRimac {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('button-reverse');
  });
});
