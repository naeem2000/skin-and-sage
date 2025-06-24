import { categoryData } from '../../functions/data';
import { Button } from '@/stories/Button';
import Slider from '@/stories/Slider';
import H3 from '@/stories/H3';
import H2 from '@/stories/H2';
import React from 'react';

export default function ShopBy() {
	return (
		<section className='max-width'>
			<div className='mt-16 flex items-center justify-center flex-col'>
				<H2 label='Shop By' />
				<H3 label='category' className='mt-5' />
				<Button label='Shop Now' primary className='mt-5' />
			</div>
			<div className='w-full mt-16'>
				<Slider categoryData={categoryData} />
			</div>
		</section>
	);
}
