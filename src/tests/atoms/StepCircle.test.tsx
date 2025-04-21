// StepCircle.test.tsx
import { render, screen } from '@testing-library/react';
import { StepCircle } from '../../components';
import '@testing-library/jest-dom';

describe('StepCircle', () => {
  const baseProps = {
    title: 'Paso 2',
    img: '/assets/icon.paso2.circle.png',
  };

  it('should render the correct image in "inactive" state', () => {
    render(<StepCircle {...baseProps} state='inactive' />);
    const image = screen.getByAltText('logo') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('circle.svg');
  });

  it('should render the correct image in "active" state', () => {
    render(<StepCircle {...baseProps} state='active' />);
    const image = screen.getByAltText('logo') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('circle-dark.svg');
  });

  it('should render the check icon in "completed" state', () => {
    const { container } = render(
      <StepCircle {...baseProps} state='completed' />,
    );
    const checkIcon = container.querySelector('svg');
    expect(checkIcon).toBeInTheDocument();
  });

  it('should display the title if provided', () => {
    render(<StepCircle {...baseProps} state='inactive' />);
    expect(screen.getByText(baseProps.title)).toBeInTheDocument();
  });

  it('should not display the title if it is empty', () => {
    render(<StepCircle {...baseProps} title='' state='inactive' />);
    expect(screen.queryByText(baseProps.title)).not.toBeInTheDocument();
  });

  it('should apply custom className if provided', () => {
    render(
      <StepCircle {...baseProps} className='custom-class' state='inactive' />,
    );
    const container = screen.getByText(baseProps.title).parentElement;
    expect(container).toHaveClass('custom-class');
  });
});
