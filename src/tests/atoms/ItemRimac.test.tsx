// ItemRimac.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ItemRimac } from '../../components';

describe('ItemRimac', () => {
  it('should render the text correctly', () => {
    render(<ItemRimac text='Seguro de auto' fnClick={jest.fn()} />);
    expect(screen.getByText('Seguro de auto')).toBeInTheDocument();
  });

  it('should call fnClick when the button is clicked', async () => {
    const fnClick = jest.fn();
    render(<ItemRimac text='Eliminar' fnClick={fnClick} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(fnClick).toHaveBeenCalledTimes(1);
  });

  it('should render the icon', () => {
    const { container } = render(
      <ItemRimac text='Ver más' fnClick={jest.fn()} />,
    );

    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('w-5 h-5 text-rimac-black');
  });
});
