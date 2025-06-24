import ExpertCare from './components/ExpertCare';
import TopPicks from './components/TopPicks';
import Connect from './components/Connect';
import Contact from './components/Contact';
import ShopBy from './components/ShopBy';
import Moment from './components/Moment';
import Hero from './components/Hero';
import React from 'react';

export default function HeroPage() {
	return (
		<>
			<Hero />
			<TopPicks />
			<ExpertCare />
			<ShopBy />
			<Moment />
			<Connect />
			<Contact />
		</>
	);
}
