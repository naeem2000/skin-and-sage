import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
	return (
		<footer className='bg-[var(--green)] pt-10 pb-10 mt-28'>
			<div className='max-width'>
				<Image
					src={'/images/Logo-white.png'}
					width={139}
					height={22}
					alt='Logo'
				/>
				<p className='font-normal text-sm leading-5 tracking-[0%] mt-4 text-white'>
					some text over here
				</p>
				<div className='flex mt-3.5'>
					<Link href={''} target='_blank'>
						<BsInstagram color='white' />
					</Link>
					<Link href={''} target='_blank'>
						<BsFacebook color='white' className='ml-6 mr-6' />
					</Link>
					<Link href={''} target='_blank'>
						<BsLinkedin color='white' />
					</Link>
				</div>
			</div>
		</footer>
	);
}
