// RefreshRimac.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { RefreshRimac } from '../../components';

describe('RefreshRimac', () => {
  it('should render the refresh icon', () => {
    const { container } = render(<RefreshRimac fnClick={jest.fn()} />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('should call fnClick when button is clicked', async () => {
    const user = userEvent.setup();
    const fnClick = jest.fn();

    render(<RefreshRimac fnClick={fnClick} />);
    const button = screen.getByRole('button');
    await user.click(button);

    expect(fnClick).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className if provided', () => {
    render(<RefreshRimac fnClick={() => {}} className='custom-class' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });
});
