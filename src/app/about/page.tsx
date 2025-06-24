import SanctuaryGrid from './components/Sanctuary-grid';
import { videoUrl } from '../functions/constants';
import VideoPlayer from '@/stories/VideoPlayer';
import AboutHero from './components/AboutHero';
import Services from './components/Services';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Skin & Sage | About',
};

export default function page() {
	return (
		<main>
			<AboutHero />
			<VideoPlayer videoUrl={videoUrl} />
			<SanctuaryGrid />
			<Services />
		</main>
	);
}
