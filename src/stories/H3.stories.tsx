import type { Meta, StoryObj } from '@storybook/nextjs';

import H from './H3';

const meta = {
	component: H,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof H>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'label',
	},
};
