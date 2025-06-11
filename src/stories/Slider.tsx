'use client';

import { CategoryData, SliderData } from '@/modules/modules';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import React from 'react';
import { sliderStyles } from '@/app/components/functions/constants';

interface SliderProps {
	sliderData?: SliderData;
	categoryData?: CategoryData;
}

export default function Slider({ sliderData, categoryData }: SliderProps) {
	return (
		<div className='h-full mb-5 lg:mb-10 w-full'>
			<Carousel {...sliderStyles}>
				{sliderData &&
					sliderData.map((item, index) => {
						return (
							<div key={index} className='h-full w-[317px]'>
								<div className='flex items-center justify-center flex-col'>
									<Image
										alt='product'
										width={317}
										height={380}
										src={item.image}
									/>
									<div className='self-start'>
										<p className='font-normal text-base md:text-xl leading-[100%] tracking-[5%]'>
											{item.productName}
										</p>
										<p className='font-normal text-sm md:text-base leading-[100%] tracking-[5%] mt-3.5'>
											R{item.price}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				{categoryData &&
					categoryData.map((item, index) => {
						return (
							<div key={index} className='h-full w-[317px]'>
								<div className='flex items-center justify-center flex-col h-full w-full'>
									<Image
										alt='product'
										width={317}
										height={380}
										src={item.image}
									/>
									<div className='self-start'>
										<p className='max-w-[210px] md:max-w-full font-normal text-lg md:text-xl leading-[100%] tracking-[5%]'>
											{item.categoryName}
										</p>
										<p className='max-w-[210px] md:max-w-full mt-3.5 font-normal text-sm md:text-base leading-[100%] tracking-[5%]'>
											{item.categoryDescription}
										</p>
										<p className='max-w-[210px] md:max-w-full mt-5 font-normal text-sm leading-[100%] tracking-[5%]'>
											{item.categoryText}
										</p>
									</div>
								</div>
							</div>
						);
					})}
			</Carousel>
		</div>
	);
}
