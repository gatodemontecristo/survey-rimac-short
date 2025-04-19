import type { Meta, StoryObj } from '@storybook/react';
import { StepCompleted } from '../../components';

const meta: Meta<typeof StepCompleted> = {
  title: 'molecules/StepCompleted',
  component: StepCompleted,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text', description: 'Texto principal del componente' },
    special: { control: 'text', description: 'Texto especial destacado' },
    reverse: {
      control: 'boolean',
      description: 'Invierte los colores del texto',
    },
    img: { control: 'text', description: 'URL de la imagen para el círculo' },
  },
};
export default meta;
type Story = StoryObj<typeof StepCompleted>;

export const Default: Story = {
  args: {
    text: 'Paso completado',
    special: '¡Felicidades!',
    reverse: false,
    img: '../icons/svgexport-118-dark.svg',
  },
};
export const ReversedText: Story = {
  args: {
    text: 'Paso completado',
    special: '¡Felicidades!',
    reverse: true,
    img: '../icons/svgexport-8-dark.svg',
  },
};

export const CustomImage: Story = {
  args: {
    text: 'Paso completado',
    special: '¡Bien hecho!',
    reverse: false,
    img: '../icons/svgexport-2-dark.svg',
  },
};
