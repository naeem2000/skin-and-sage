import { Button } from '@/stories/Button';
import ClientSlider from '@/stories/Slider';
import Slider from '@/stories/Slider';
import React from 'react';

export default function TopPicks() {
	return (
		<section className='max-width'>
			<div className='mt-20 flex justify-center flex-col md:flex-row'>
				<div className='w-[20%] mr-14'>
					<h2 className="flex flex-col font-normal text-[40px] leading-[90%] tracking-[10%] capitalize text-[var(--primary)] font-['Brown-Sugar']">
						TOP PICKS
						<span className='mt-3.5 ml-2.5 font-normal text-lg leading-[90%] tracking-[5%] font-["Century-Gothic"] lowercase'>
							made for you
						</span>
					</h2>
					<p className='max-w-[220px] mt-10 font-normal text-lg leading-[100%] tracking-[5%]'>
						Tried, tested, and loved, your next skin essential starts here.
					</p>
					<Button label='Shop now' primary className='mt-10' />
				</div>
				<div className='w-[70%]'>
					<Slider />
				</div>
			</div>
		</section>
	);
}
