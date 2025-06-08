'use client';

import { sliderStyles } from '@/app/components/functions/constants';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Slider() {
	return (
		<div className='h-full w-full'>
			<Carousel {...sliderStyles}>
				<div className='bg-red-400 h-[380px] w-[317px]'>Item 1</div>

				<div className='bg-red-400 h-[380px] w-[317px]'>Item 2</div>

				<div className='bg-red-400 h-[380px] w-[317px]'>Item 2</div>

				<div className='bg-red-400 h-[380px] w-[317px]'>Item 2</div>

				<div className='bg-red-400 h-[380px] w-[317px]'>Item 2</div>
			</Carousel>
		</div>
	);
}
