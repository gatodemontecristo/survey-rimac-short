// SliderRimac.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { SliderRimac } from '../../components';
import '@testing-library/jest-dom';
import { useState } from 'react';

describe('SliderRimac', () => {
  const baseProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    onChange: jest.fn(),
  };
  const Wrapper = (props: typeof baseProps) => {
    const [value, setValue] = useState(props.value);

    const handleChange = (newValue: number) => {
      setValue(newValue);
      props.onChange(newValue);
    };

    return <SliderRimac {...props} value={value} onChange={handleChange} />;
  };
  it('should render the slider input', () => {
    render(<SliderRimac {...baseProps} />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '100');
    expect(slider).toHaveAttribute('step', '1');
  });

  it('should display the correct initial value', () => {
    render(<SliderRimac {...baseProps} />);
    const valueText = screen.getByText('50');
    expect(valueText).toBeInTheDocument();
  });

  it('should update the value when slider is moved', async () => {
    const handleChange = jest.fn();
    render(<Wrapper {...baseProps} onChange={handleChange} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveValue(String(50));
    fireEvent.change(slider, { target: { value: '70' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(70);
    expect(slider).toHaveValue('70');
  });

  it('should display leftTitle and rightTitle if provided', () => {
    render(<SliderRimac {...baseProps} leftTitle='Low' rightTitle='High' />);
    expect(screen.getByText('Low')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  it('should fallback to min and max values if leftTitle and rightTitle are not provided', () => {
    render(<SliderRimac {...baseProps} />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });
});
