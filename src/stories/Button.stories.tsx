import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './Button';
import { fn } from 'storybook/test';

const meta = {
	component: Button,
	parameters: {
		layout: 'centered',
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
        primary: true,
        label: "Buttona",
        onClick: fn(),
        size: "medium"
    },
};

export const Secondary: Story = {
	args: {
		label: 'Button',
		onClick: fn(),
	},
};
