import { Button } from '@/stories/Button';
import Image from 'next/image';
import React from 'react';

export default function hero() {
	return (
		<section className='max-width bg-[image:var(--hero-bg-mobile)] md:bg-[image:var(--hero-bg-desktop)] bg-top bg-cover bg-no-repeat md:min-h-[854px] min-h-[600px]'>
			<div className='flex flex-col items-center justify-center w-full min-h-[804px]'>
				<div className='flex items-center justify-center flex-col mt-7'>
					<Image
						src={'/images/Hero-logo.png'}
						alt='logo'
						width={570}
						height={88}
					/>
					<Button className='mt-8' primary size='large' label='Shop Now' />
				</div>
			</div>
		</section>
	);
}
