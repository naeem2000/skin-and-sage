import { footerLinks, socialLinks } from '@/app/components/functions/data';
import { FaCcMastercard } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='bg-[var(--green)] pt-10 pb-5 lg:pb-10 mt-28'>
			<div className='max-width'>
				<div className='flex justify-between items-start mb-10 flex-col lg:flex-row'>
					<div className='w-full lg:w-max'>
						<div className='flex items-center lg:items-start justify-center flex-col mb-5 lg:mb-0'>
							<Image
								src={'/images/Logo-white.png'}
								width={139}
								height={22}
								alt='Logo'
							/>
							<p className='font-normal text-sm leading-5 tracking-[0%] mt-4 text-white max-w-64'>
								The of blend science and serenity to bring out your skin’s
								natural radiance.
							</p>
						</div>
						<div className='mt-4 hidden lg:flex'>
							{socialLinks.map((item, index) => {
								const icon = item.icon;
								return (
									<Link
										className={
											index === socialLinks.length - 1 ? 'mr-0' : 'mr-6'
										}
										key={index}
										href={item.link}
										target='_blank'
									>
										{icon}
									</Link>
								);
							})}
						</div>
					</div>
					<div className='flex w-full lg:w-max'>
						<div className='hidden lg:flex flex-col mr-20 w-1/2'>
							{footerLinks.map((item, index) => {
								return (
									<Link
										className={`font-normal text-sm leading-[100%] tracking-[2%] text-white ${
											index === footerLinks.length - 1 ? 'mb-0' : 'mb-3'
										}`}
										key={index}
										href={item.link}
									>
										{item.text}
									</Link>
								);
							})}
						</div>
						<div className='w-full flex flex-col border-t lg:border-0 border-[var(--placeholder)] pt-5 lg:pt-0'>
							<p className='font-normal text-base leading-6 tracking-[0%] text-white text-center lg:text-left'>
								Subscribe to our Newsletter
							</p>
							<input
								type='text'
								name='newsletter'
								placeholder='Email Address'
								className='bg-white !w-full lg:!w-[367px]'
							/>
						</div>
					</div>
				</div>
				<div className='w-full hidden lg:block h-[1px] border border-[#707070]' />
				<div className='flex justify-between mt-6 flex-col lg:flex-row items-center lg:items-start'>
					<div className='border-t border-[var(--placeholder)] lg:border-0 w-full order-2 lg:order-1 pt-5 lg:mt-0'>
						<p className='font-normal text-xs leading-5 tracking-[0%] text-white text-center lg:text-left'>
							© 2025 SkinandSage · All Rights Reserved
						</p>
					</div>
					<div className='flex items-start lg:hidden w-full flex-col mr-0 '>
						{footerLinks
							.filter((item) => item.text !== 'Home')
							.map((item, index, filteredLinks) => {
								const isLast = index === filteredLinks.length - 1;
								return (
									<Link
										className={`font-normal text-sm leading-[100%] tracking-[2%] text-white w-full border-t border-[var(--placeholder)] pt-5 pb-5 ${
											isLast ? 'border-b' : ''
										}`}
										key={index}
										href={item.link}
									>
										{item.text}
									</Link>
								);
							})}
					</div>
					<div className='flex flex-col items-center order-1 lg:order-2'>
						<div className='flex lg:hidden mb-5 mt-9'>
							{socialLinks.map((item, index) => {
								const icon = item.icon;
								return (
									<Link
										className={
											index === socialLinks.length - 1 ? 'mr-0' : 'mr-6'
										}
										key={index}
										href={item.link}
										target='_blank'
									>
										{icon}
									</Link>
								);
							})}
						</div>
						<div className='flex mb-5 lg:mb-0'>
							<RiVisaLine size={50} color='#FFFFFF' className='mr-5' />
							<FaCcMastercard size={40} color='#FFFFFF' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
