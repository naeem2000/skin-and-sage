import { Button } from '@/stories/Button';
import React from 'react';

export default function Moment() {
	return (
		<section className='max-width flex items-center justify-center flex-col relative h-[397px] w-full bg-top bg-cover bg-no-repeat bg-[image:var(--moment-bg)] z-10'>
			<div className='absolute bg-[var(--peach)] right-0 bottom-0 top-0 left-0 opacity-50 -z-10' />
			<h2 className="text-3xl leading-[140%] tracking-[10%] font-['Brown-Sugar'] text-white text-center">
				give every woman a moment to reconnect with her skin
			</h2>
			<Button label='Shop Now' className='mt-8' />
		</section>
	);
}
