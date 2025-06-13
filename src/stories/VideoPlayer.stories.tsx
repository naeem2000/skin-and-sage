import { videoUrl } from '@/app/components/functions/constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
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
