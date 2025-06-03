'use client';

import { navIcons, navLinks } from './functions/data';
import { Fade as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
	return (
		<nav className='md:py-8 py-4'>
			<div className='flex items-center justify-between'>
				<div className='hidden md:flex'>
					{navLinks.map((item, index) => {
						return (
							<Link
								className={`${
									index === navLinks.length - 1 ? 'mr-0' : 'mr-5'
								} font-normal text-sm leading-[90%] tracking-[10%] capitalize`}
								key={index}
								href={item.url}
							>
								{item.link}
							</Link>
						);
					})}
				</div>
				<Link href={'#'} className='mr-44'>
					<Image
						src={'/images/Logo-black.png'}
						width={139}
						height={22}
						alt='logo'
					/>
				</Link>
				<div className='block md:hidden'>
					<Hamburger size={25} />
				</div>
				<div className='hidden md:flex'>
					{navIcons.map((item, index) => {
						const Icon = item.icon;
						return (
							<Link
								key={index}
								href={item.url}
								className={index === navIcons.length - 1 ? 'mr-0' : 'mr-5'}
							>
								{Icon && <Icon size={20} />}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
