import { aboutCards } from '@/app/components/functions/data';
import type { Meta, StoryObj } from '@storybook/nextjs';
import AboutCard from './About-Card';

const meta = {
	component: AboutCard,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AboutCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		item: aboutCards[0],
	},
};
