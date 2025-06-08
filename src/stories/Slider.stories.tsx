import type { Meta, StoryObj } from '@storybook/nextjs';

import Slider from './Slider';
import { categoryData, sliderData } from '@/app/components/functions/data';

const meta = {
	component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		sliderData: sliderData,
		categoryData: categoryData,
	},
};
