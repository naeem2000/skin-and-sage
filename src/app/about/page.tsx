import { videoUrl } from '../components/functions/constants';
import SanctuaryGrid from './components/Sanctuary-grid';
import VideoPlayer from '@/stories/VideoPlayer';
import AboutHero from './components/AboutHero';
import Services from './components/Services';
import React from 'react';
import { Metadata } from 'next';

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
