// ToogleRimac.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ToogleRimac } from '../../components';

describe('ToogleRimac', () => {
  it('should render with default styles', () => {
    render(<ToogleRimac isOn={false} setIsOn={jest.fn()} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render the check icon when isOn is true', () => {
    const container = render(<ToogleRimac isOn={true} setIsOn={jest.fn()} />);
    const spans = container.container.querySelectorAll('.absolute');

    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveClass('opacity-100');
    expect(spans[1]).toHaveClass('opacity-0');
    expect(spans[2]).toHaveClass('translate-x-6');
    const icon = screen.getByTestId('icon-check');
    expect(icon).toBeInTheDocument();
  });

  it('should render the times icon when isOn is false', () => {
    const container = render(<ToogleRimac isOn={false} setIsOn={jest.fn()} />);
    const spans = container.container.querySelectorAll('.absolute');

    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveClass('opacity-0');
    expect(spans[1]).toHaveClass('opacity-100');
    expect(spans[2]).toHaveClass('translate-x-0');
    const icon = screen.getByTestId('icon-times');
    expect(icon).toBeInTheDocument();
  });

  it('should toggle state when clicked', async () => {
    const setIsOnMock = jest.fn();
    render(<ToogleRimac isOn={false} setIsOn={setIsOnMock} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(setIsOnMock).toHaveBeenCalledWith(true);
  });

  it('should show text if provided', () => {
    render(<ToogleRimac isOn={false} setIsOn={jest.fn()} text='Toggle me' />);
    expect(screen.getByText('Toggle me')).toBeInTheDocument();
  });
});
