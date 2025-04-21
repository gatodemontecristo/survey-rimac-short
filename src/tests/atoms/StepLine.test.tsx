// StepLine.test.tsx
import { render } from '@testing-library/react';
import { StepLine } from '../../components';
import '@testing-library/jest-dom';

describe('StepLine', () => {
  it('should render with dotted border when type is "dotted"', () => {
    const { container } = render(<StepLine type='dotted' />);
    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass('border-dotted');
    expect(div).not.toHaveClass('border');
  });

  it('should render with solid border when type is "line"', () => {
    const { container } = render(<StepLine type='line' />);
    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass('border');
    expect(div).not.toHaveClass('border-dotted');
  });

  it('should always have base styles applied', () => {
    const { container } = render(<StepLine type='line' />);
    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass(
      'w-4',
      'md:w-1',
      'h-[25px]',
      'md:h-[35px]',
      'border-t-4',
      'border-0',
      'md:border-l-4',
      'border-rimac-white',
    );
  });
});
