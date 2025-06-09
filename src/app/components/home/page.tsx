import ExpertCare from './components/ExpertCare';
import TopPicks from './components/TopPicks';
import ShopBy from './components/ShopBy';
import Moment from './components/Moment';
import Hero from './components/Hero';
import React from 'react';
import Connect from './components/Connect';

export default function HeroPage() {
	return (
		<>
			<Hero />
			<TopPicks />
			<ExpertCare />
			<ShopBy />
			<Moment />
			<Connect />
		</>
	);
}
