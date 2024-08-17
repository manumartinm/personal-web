import type { Meta, StoryObj } from '@storybook/react';

import { InfoCard } from './InfoCard';

const meta: Meta<typeof InfoCard> = {
  title: 'UI/InfoCard',
  component: InfoCard,
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Primary: Story = {
  args: {
    title: 'React Course',
    description: 'Learn how to build web applications with React.',
    link: {
      label: 'View Project',
      href: '#',
    },
  },
};
