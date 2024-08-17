import type { Meta, StoryObj } from '@storybook/react';

import { WorkExperience } from './WorkExperience';

const meta: Meta<typeof WorkExperience> = {
  component: WorkExperience,
};

export default meta;

type Story = StoryObj<typeof WorkExperience>;

export const Primary: Story = {
  args: {
    company: 'Google',
    description: 'I worked on the Google Search team.',
    dateInfo: {
      start: new Date('2019-01-01'),
      end: new Date('2020-01-01'),
    },
    badges: [
      {
        name: 'React',
        link: 'https://reactjs.org/',
      },
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
      },
    ],
  },
};
