import HeroPage from './home/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Skin & Sage | Home',
};

export default function Home() {
	return (
		<main>
			<HeroPage />
		</main>
	);
}
