import type { Meta, StoryObj } from '@storybook/nextjs';
import { videoUrl } from '@/app/functions/constants';
import VideoPlayer from './VideoPlayer';

const meta = {
	component: VideoPlayer,
} satisfies Meta<typeof VideoPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		videoUrl: videoUrl,
	},
};
