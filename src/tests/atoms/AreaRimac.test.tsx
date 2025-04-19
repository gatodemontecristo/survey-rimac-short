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

  it('debería renderizar correctamente con las props iniciales', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('maxlength', '100');
    expect(textarea).toHaveValue('');
    expect(screen.getByText('0/100')).toBeInTheDocument();
  });

  it('debería mostrar el placeholder correctamente', () => {
    render(<AreaRimac {...defaultProps} />);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('text-gray-500');
  });

  it('debería actualizar el valor al escribir en el textarea', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Hola, mundo!' } });
    expect(mockOnChange).toHaveBeenCalledWith('Hola, mundo!');
  });

  it('debería mostrar el contador de caracteres correctamente', () => {
    render(<AreaRimac {...defaultProps} value='Hola' />);
    expect(screen.getByText('4/100')).toBeInTheDocument();
  });

  it('debería aplicar la clase de enfoque al hacer focus', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toHaveClass('text-blue-500');
  });

  it('debería eliminar la clase de enfoque al hacer blur si el valor está vacío', () => {
    render(<AreaRimac {...defaultProps} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toHaveClass('text-gray-500');
  });

  it('debería mantener la clase de enfoque al hacer blur si el valor no está vacío', () => {
    render(<AreaRimac {...defaultProps} value='Hola' />);
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    const label = screen.getByText('Escribe aquí...');
    expect(label).toHaveClass('text-blue-500');
  });
});
