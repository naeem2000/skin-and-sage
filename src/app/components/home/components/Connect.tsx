import { connectRow } from '../../functions/data';
import React from 'react';
import Card from '@/stories/Card';
import H2 from '@/stories/H2';
import H3 from '@/stories/H3';

export default function Connect() {
	return (
		<section className='max-width'>
			<div className='text-center mt-20'>
				<H2 label='Connect' />
				<H3
					label='Join our community of self-care activists'
					className='mt-5'
				/>
			</div>
			<div className='flex flex-row flex-wrap items-center justify-center'>
				{connectRow.map((item, index) => (
					<Card item={item} key={index} />
				))}
			</div>
		</section>
	);
}
