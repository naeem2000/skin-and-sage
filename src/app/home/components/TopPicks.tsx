import { sliderData } from '../../functions/data';
import { Button } from '@/stories/Button';
import Slider from '@/stories/Slider';
import H2 from '@/stories/H2';
import H3 from '@/stories/H3';
import React from 'react';

export default function TopPicks() {
	return (
		<section className='max-width'>
			<div className='mt-5 md:mt-20 flex justify-center flex-col lg:flex-row'>
				<div className='flex flex-col items-center justify-center md:items-start w-full lg:w-[20%] mr-14'>
					<div className='flex flex-col'>
						<H2
							label='TOP PICKS'
							className='text-center mt-10 md:mt-0 md:text-left'
						/>
						<H3 className='mt-3.5 ml-2.5' label='made for you' />
					</div>
					<p className='hidden md:block max-w-full lg:max-w-[220px] mt-10 font-normal text-lg leading-[100%] tracking-[5%]'>
						Tried, tested, and loved, your next skin essential starts here.
					</p>
					<Button label='Shop now' primary className='hidden md:block mt-10' />
				</div>
				<div className='w-full mt-8 lg:w-[70%]'>
					<Slider sliderData={sliderData} />
				</div>
			</div>
		</section>
	);
}
