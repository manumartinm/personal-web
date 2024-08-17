import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  args: {
    description:
      'I am a software engineer who loves to build web applications.',
    joined: new Date(),
    location: 'Valencia',
    title: 'John Doe',
  },
};
