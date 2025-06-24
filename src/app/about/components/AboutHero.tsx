import { aboutCards } from '@/app/functions/data';
import AboutCard from '@/stories/About-Card';
import { Button } from '@/stories/Button';
import Image from 'next/image';
import React from 'react';

export default function AboutHero() {
	return (
		<section className='max-width'>
			<div className='flex justify-between items-center mt-32 flex-col xl:flex-row'>
				<div className='flex items-center justify-center flex-col xl:mr-[171px] mb-14 xl:mb-0'>
					<h1 className='font-normal text-3xl leading-[100%] tracking-[5%] text-center uppercase max-w-[600px] text-[var(--green)]'>
						Expert Care to Achieve Your Skin Goals
					</h1>
					<p className='font-normal text-lg leading-[25px] tracking-[5%] text-center max-w-[600px] mt-7'>
						At Skin & Sage, we blend science and serenity to bring out your
						skin’s natural radiance. Founded on the principles of expert care
						and personalized attention, we offer a range of advanced laser and
						aesthetic treatments tailored to your unique skin goals.
					</p>
					<Button className='mt-10' primary label='Book now' />
				</div>
				<Image
					src={'/images/About-hero.png'}
					width={624}
					height={603}
					alt='About'
				/>
			</div>
			<div className='flex flex-row flex-wrap justify-center mt-20 lg:mt-32 mb-20'>
				{aboutCards.map((item, index) => {
					return <AboutCard key={index} item={item} />;
				})}
			</div>
		</section>
	);
}
