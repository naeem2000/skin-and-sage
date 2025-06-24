'use client';

import { navIcons, navLinks } from '../app/functions/data';
import { Fade as Hamburger } from 'hamburger-react';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const path = usePathname();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.body.style.overflow = isNavOpen ? 'hidden' : 'auto';
		}

		return () => {
			if (typeof window !== 'undefined') {
				document.body.style.overflow = 'auto';
			}
		};
	}, [isNavOpen]);

	return (
		<nav className='max-width absolute right-0 left-0 top-0 md:py-8 px-8 py-4'>
			<div className='flex items-center justify-between'>
				<div className='hidden md:flex'>
					{navLinks.map((item, index) => {
						return (
							<Link
								className={`${
									index === navLinks.length - 1 ? 'mr-0' : 'mr-5'
								} font-normal text-black text-sm leading-[90%] tracking-[10%] capitalize hover:underline`}
								key={index}
								href={path !== '/' && item.url === '/about' ? '/' : item.url}
							>
								{path !== '/' && item.link === 'About' ? 'Home' : item.link}
							</Link>
						);
					})}
				</div>
				<Link href={'/'} className='mr-32'>
					<Image
						src={'/images/Logo-black.png'}
						width={150}
						height={100}
						alt='logo'
					/>
				</Link>
				<div className='block md:hidden'>
					<Hamburger
						toggle={() => setIsNavOpen(true)}
						toggled={false}
						size={25}
					/>
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
			<div
				className={`fixed top-0 right-0 left-0 bottom-0 h-screen w-full bg-gray-800 z-20 px-10 py-32 block md:hidden overflow-x-scroll ${
					isNavOpen ? 'translate-x-0' : '-translate-x-[100%]'
				} transition-all duration-300 ease-in-out`}
			>
				<div className='flex flex-col items-start justify-start h-full'>
					<div className='flex items-center justify-between w-full mb-36'>
						<Image
							src={'/images/Logo-white.png'}
							width={250}
							height={100}
							alt='logo'
						/>
						<Hamburger
							toggle={() => setIsNavOpen(false)}
							toggled={true}
							color='white'
							size={25}
						/>
					</div>
					{navLinks.map((item, index) => {
						return (
							<Link
								onClick={() => setIsNavOpen(false)}
								className={`${
									index === navLinks.length - 1 ? 'mb-0' : 'mb-5'
								} font-normal text-white text-2xl leading-[90%] tracking-[10%] capitalize`}
								key={index}
								href={path !== '/' && item.url === '/about' ? '/' : item.url}
							>
								{path !== '/' && item.link === 'About' ? 'Home' : item.link}
							</Link>
						);
					})}
					<div className='flex mt-15'>
						{navIcons.map((item, index) => {
							const Icon = item.icon;
							return (
								<Link
									key={index}
									href={item.url}
									className={index === navIcons.length - 1 ? 'mr-0' : 'mr-5'}
								>
									{Icon && <Icon color='white' size={30} />}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
}
