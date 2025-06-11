'use client';

import { navIcons, navLinks } from '../app/components/functions/data';
import { Fade as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const path = usePathname();

	return (
		<nav className='max-width absolute right-0 left-0 top-0 md:py-8 px-8 py-4'>
			<div className='flex items-center justify-between'>
				<div className='hidden md:flex'>
					{navLinks.map((item, index) => {
						return (
							<Link
								className={`${
									index === navLinks.length - 1 ? 'mr-0' : 'mr-5'
								} font-normal text-black text-sm leading-[90%] tracking-[10%] capitalize`}
								key={index}
								href={path !== '/' && item.url === '/about' ? '/' : item.url}
							>
								{path !== '/' && item.link === 'About' ? 'Home' : item.link}
							</Link>
						);
					})}
				</div>
				<Link href={'#'} className='mr-32'>
					<Image
						src={'/images/Logo-black.png'}
						width={139}
						height={22}
						alt='logo'
					/>
				</Link>
				<div className='block md:hidden'>
					<Hamburger toggle={() => setIsNavOpen(!isNavOpen)} size={25} />
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
			<div className='absolute top-0 right-0 left-0 bottom-0'>awe</div>
		</nav>
	);
}
