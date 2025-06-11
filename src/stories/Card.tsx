'use client';
import { ConnectRow } from '@/modules/modules';
import { IoMdHeart } from 'react-icons/io';
import { GoHeart } from 'react-icons/go';
import React, { useState } from 'react';
import Image from 'next/image';

type ConnectItem = ConnectRow[number];
type Props = { item: ConnectItem };

export default function Card({ item }: Props) {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	return (
		<div className='m-2 w-[155px] md:w-[318px]'>
			<Image alt='product' src={item.image} width={318} height={290} />
			<div className='flex items-center mt-3.5'>
				{!isLiked ? (
					<GoHeart
						size={20}
						onClick={() => setIsLiked(true)}
						className='cursor-pointer'
					/>
				) : (
					<IoMdHeart
						size={20}
						color='red'
						onClick={() => setIsLiked(false)}
						className='cursor-pointer'
					/>
				)}
				<span className='ml-2 font-normal text-xl leading-[100%] tracking-[5%]'>
					{item.likes + (isLiked ? 1 : 0)} Likes
				</span>
			</div>
			<p className='mt-3 font-normal text-sm leading-[100%] tracking-[5%]'>
				{item.description}
			</p>
		</div>
	);
}
