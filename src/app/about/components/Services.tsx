import { Button } from '@/stories/Button';
import React from 'react';

export default function Services() {
	return (
		<section className='max-width'>
			<div className='mt-20 lg:mt-36 flex items-center justify-center flex-col'>
				<h2 className='font-normal text-3xl leading-[100%] tracking-[0px] text-center uppercase'>
					OUR SERVICES
				</h2>
				<div className='flex items-start justify-center mt-10 lg:mt-16 flex-col lg:flex-row'>
					<div className='max-w-full lg:max-w-[550px]'>
						<h3 className='font-normal text-lg leading-[26px] tracking-[0px] uppercase'>
							Our holistic approach to beauty and skincare includes:
						</h3>
						<ul className='list-disc pl-5'>
							<li>Lash Lifting & Tinting</li>
							<li>Lash Lamination</li>
							<li>Brow Lamination</li>
							<li>Eyebrow Waxing. Threading & Tweezing</li>
							<li>Dermaplaning</li>
							<li>Microneedling (Face & Body)</li>
							<li>Fat Freezing & Cellulite Treatments</li>
							<li>Stretch Mark Revision & Camouflage</li>
						</ul>
					</div>
					<div className='max-w-full mt-10 lg:mt-0 lg:max-w-[550px]'>
						<h3 className='font-normal text-lg leading-[26px] tracking-[0px] uppercase'>
							Our Skin Lab training foundation ensures every treatment is backed
							by deep knowledge and expert technique. we proudly offer:
						</h3>
						<ul className='list-disc pl-5'>
							<li>All Skin Lab Procedure</li>
							<li>Product Knowledge & Retail</li>
							<li>Manual & Chemical Peels</li>
							<li>Extractions</li>
							<li>Classic Facials</li>
						</ul>
					</div>
				</div>
				<Button
					primary
					label='Book an appointment'
					size='large'
					className='!w-[244px] mt-10'
				/>
			</div>
		</section>
	);
}
