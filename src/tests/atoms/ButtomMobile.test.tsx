import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtomMobile } from '../../components';

describe('ButtomMobile Component', () => {
  const mockOnClic = jest.fn();
  const defaultProps = {
    text: 'Default value',
    fnClick: mockOnClic,
    className: 'm-5',
    isNav: true,
  };
  it('it should render correctly with the initial props', () => {
    render(<ButtomMobile fnClick={mockOnClic} text='Default value' />);
    const spanBtn = screen.getByText('Default value');
    expect(spanBtn).toBeInTheDocument();
    expect(spanBtn).toHaveClass('button-text');
    expect(screen.getByRole('button')).toHaveClass('button-circle-mb');
  });

  it('it should apply nav configuration when I send the prop', () => {
    const { container } = render(<ButtomMobile {...defaultProps} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('button-reverse-mb');
  });

  it('it should render with custom className', () => {
    render(<ButtomMobile {...defaultProps} />);

    expect(screen.getByRole('button')).toHaveClass('m-5 w-full');
  });
  it('it should call fnClick when button is clicked (default mode)', () => {
    render(<ButtomMobile text='Click me' fnClick={mockOnClic} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClic).toHaveBeenCalledTimes(1);
  });
});
