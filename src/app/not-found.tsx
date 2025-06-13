import { Button } from '@/stories/Button';
import { Metadata } from 'next';
import H2 from '@/stories/H2';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
	title: 'Skin & Sage | Not Found',
};

export default function Custom404() {
	return (
		<main className='max-width flex items-center flex-col justify-center max-h-[50vh] h-screen !mt-28'>
			<H2 className='!text-4xl md:!text-6xl' label='404 - Page Not Found' />
			<p className='my-9 text-lg'>Have you lost your way?</p>
			<Link href={'/'}>
				<Button primary label='Back to Home' />
			</Link>
		</main>
	);
}
