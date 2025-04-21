// StepBigCircle.test.tsx
import { render, screen } from '@testing-library/react';
import { StepBigCircle } from '../../components';
import '@testing-library/jest-dom';

describe('StepBigCircle', () => {
  const baseProps = {
    title: 'Paso 1',
    img: '/default-img.png',
  };

  it('should render the image when state is inactive', () => {
    render(<StepBigCircle {...baseProps} state='inactive' />);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', baseProps.img);
  });

  it('should render the image when state is active', () => {
    render(<StepBigCircle {...baseProps} state='active' />);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument();
  });

  it('should render the check icon when state is completed', () => {
    const { container } = render(
      <StepBigCircle {...baseProps} state='completed' />,
    );
    const checkIcon = container.querySelector('svg');
    expect(checkIcon).toBeInTheDocument();
  });

  it('should display the title if provided', () => {
    render(<StepBigCircle {...baseProps} state='inactive' />);
    expect(screen.getByText(baseProps.title)).toBeInTheDocument();
  });

  it('should not render a title if it is empty', () => {
    render(<StepBigCircle {...baseProps} state='inactive' title='' />);
    expect(screen.queryByText(baseProps.title)).not.toBeInTheDocument();
  });

  it('should apply custom className if provided', () => {
    render(
      <StepBigCircle {...baseProps} state='inactive' className='my-class' />,
    );
    const container = screen.getByText(baseProps.title).parentElement;
    expect(container).toHaveClass('my-class');
  });
});
