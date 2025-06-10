import type { Meta, StoryObj } from '@storybook/nextjs';

import Card from './Card';
import { connectRow } from '@/app/components/functions/data';

const meta = {
	component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

type ConnectItem = {
	image: string;
	likes: number;
	description: string;
};

type ConnectRow = ConnectItem[];

export const Default: Story = {
	args: {
		item: connectRow[0],
	},
};
