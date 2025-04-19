import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AreaRimac } from '../../components';

describe('AreaRimac Component', () => {
  const mockOnChange = jest.fn();

  const defaultProps = {
    maxLength: 100,
    placeholder: 'Escribe aquí...',
    value: '',
    onChange: mockOnChange,
  };

  it('it should render correctly with the initial props', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('maxlength', '100');
    expect(textarea).toHaveValue('');
    expect(screen.getByText('0/100')).toBeInTheDocument();
  });

  it('it should display the placeholder correctly.', () => {
    render(<AreaRimac {...defaultProps} />);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('text-gray-500');
  });

  it('it should update the value when writing to the text area', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Hola, mundo!' } });
    expect(mockOnChange).toHaveBeenCalledWith('Hola, mundo!');
  });

  it('it should display the character counter correctly', () => {
    render(<AreaRimac {...defaultProps} value='Hola' />);
    expect(screen.getByText('4/100')).toBeInTheDocument();
  });

  it('it should apply the focus class when focusing', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toHaveClass('text-blue-500');
  });

  it('it should remove the focus class when blurring if the value is empty', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toHaveClass('text-gray-500');
  });

  it('it should keep the focus class when blurring if the value is not empty', () => {
    render(<AreaRimac {...defaultProps} value='Hola' />);
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toHaveClass('text-blue-500');
  });
});
