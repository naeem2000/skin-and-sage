import { AboutCards } from '@/modules/modules';
import Image from 'next/image';
import React from 'react';

type AboutCard = AboutCards[number];

type Props = { item: AboutCard };

export default function AboutCard({ item }: Props) {
	return (
		<div className='w-[300px] h-[335px] bg-[var(--lime)] flex items-center justify-between flex-col p-5 py-10 m-2'>
			<Image src={item.image} width={item.width} height={item.height} alt='' />
			<div className='flex items-start justify-start h-28'>
				<p className='font-normal text-sm leading-[25px] tracking-[5%] text-center max-w-[230px]'>
					{item.text}
				</p>
			</div>
		</div>
	);
}
