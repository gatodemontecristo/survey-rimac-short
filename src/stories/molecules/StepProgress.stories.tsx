import { Meta, StoryObj } from '@storybook/react';
import { useStepProgress } from '../../store';
import { StepProgress } from '../../components';

const meta: Meta<typeof StepProgress> = {
  title: 'molecules/StepProgress',
  component: StepProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      useStepProgress.setState({
        stepProgress: [
          {
            title: 'Step 1',
            state: 'completed',
            img: '../icons/svgexport-118.svg',
          },
          { title: 'Step 2', state: 'active', img: '../icons/svgexport-8.svg' },
          {
            title: 'Step 3',
            state: 'inactive',
            img: '../icons/svgexport-2.svg',
          },
        ],
      });

      return <Story />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof StepProgress>;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: 'red-rimac',
      values: [{ name: 'red-rimac', value: '#f7052d' }],
    },
  },
};
