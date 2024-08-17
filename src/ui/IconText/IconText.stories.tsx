import type { Meta, StoryObj } from '@storybook/react';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';

import { IconText } from './IconText';

const meta: Meta<typeof IconText> = {
  title: 'UI/IconText',
  component: IconText,
};

export default meta;

type Story = StoryObj<typeof IconText>;

export const Primary: Story = {
  args: {
    icon: ReactLogo,
    text: 'React',
  },
};
