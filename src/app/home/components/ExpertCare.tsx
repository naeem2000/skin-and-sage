import { Button } from '@/stories/Button';
import Image from 'next/image';
import React from 'react';

export default function ExpertCare() {
	return (
		<section className='max-width flex flex-col-reverse md:flex-row gap-5 items-center justify-center'>
			<div className='flex flex-col-reverse md:flex-col gap-5'>
				<div className='flex items-center justify-center flex-col bg-[var(--light-teal)] max-w-[670px] w-full h-[185px] md:h-[319px] p-5'>
					<p className='font-normal text-lg lg:text-[32px] leading-[120%] tracking-[0%] text-center max-w-[413px]'>
						With expert care and personalized treatments
					</p>
					<Button label='Learn More' size='large' primary className='mt-5' />
				</div>
				<Image
					alt='Personalized treatments'
					src={'/images/Experts-block-1.png'}
					width={670}
					height={700}
				/>
			</div>
			<div className='flex flex-col gap-5'>
				<Image
					alt='Personalized treatments'
					src={'/images/Experts-block-2.png'}
					width={670}
					height={700}
				/>

				<div className='flex items-center justify-center flex-col bg-[var(--light-teal)] max-w-[670px] w-full h-[185px] md:h-[319px] p-5'>
					<p className='font-normal text-lg lg:text-[32px] leading-[120%] tracking-[0%] text-center max-w-[413px]'>
						Achieve Your Unique Skin Goals with Precision and Calm
					</p>
					<Button label='Learn More' size='large' primary className='mt-5' />
				</div>
			</div>
		</section>
	);
}
