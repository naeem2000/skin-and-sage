import { videoUrl } from '../components/functions/constants';
import SanctuaryGrid from './components/Sanctuary-grid';
import VideoPlayer from '@/stories/VideoPlayer';
import AboutHero from './components/AboutHero';
import React from 'react';
import Services from './components/Services';

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
