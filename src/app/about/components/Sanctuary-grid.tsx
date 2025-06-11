import Image from 'next/image';
import React from 'react';

type Props = {};

export default function SanctuaryGrid({}: Props) {
	return (
		<section className='max-width'>
			<div className='flex items-center justify-center mt-24 flex-col xl:flex-row'>
				<Image
					src={'/images/Sanctuary-grid-1.png'}
					width={624}
					height={606}
					alt='sanctuary 1'
				/>
				<div className='xl:ml-[97px] mt-7 xl:mt-0'>
					<h2 className='text-[var(--green)] font-normal text-3xl leading-[100%] tracking-[0h2x] uppercase max-w-full xl:max-w-[460px]'>
						Our studio is a sanctuary where beauty meets balance
					</h2>
					<p className='font-normal text-xl leading-[25px] tracking-[5%] max-w-full xl:max-w-[520px] mt-7'>
						Whether you’re here for corrective treatments, rejuvenation, or
						simple self-care, our certified laser specialists and licensed
						aestheticians are dedicated to providing safe, effective, and
						transformative results.
					</p>
				</div>
			</div>
			<div className='flex items-center justify-center mt-20 flex-col xl:flex-row'>
				<div className='mr-0 xl:mr-[97px] mb-7 xl:mb-0 order-2 xl:order-1 mt-7'>
					<h2 className='text-[var(--green)] font-normal text-3xl leading-[100%] tracking-[0h2x] uppercase max-w-full xl:max-w-[460px]'>
						We believe skincare is more than surface level it’s a ritual
					</h2>
					<p className='font-normal text-xl leading-[25px] tracking-[5%] max-w-full xl:max-w-[520px] mt-7'>
						We believe that it’s a form of self-love, and a journey toward
						confidence. That’s why we use only high quality, skin safe
						technology and curated skincare solutions that align with your
						lifestyle and values.
						<br />
						<br />
						Let Skin & Sage be your trusted guide in all things skin health.
						Because when your skin thrives, so do you.
					</p>
				</div>
				<Image
					src={'/images/Sanctuary-grid-2.png'}
					width={624}
					height={606}
					alt='sanctuary 1'
					className='order-1 xl:order-2'
				/>
			</div>
		</section>
	);
}
