import { Button } from '@/stories/Button';
import Image from 'next/image';
import React from 'react';

export default function Contact() {
	return (
		<section className='max-width'>
			<div className='flex items-center justify-center flex-wrap mt-10 md:mt-28'>
				<Image
					src={'/images/Contact.png'}
					width={578}
					height={549}
					alt='Contact'
				/>
				<form className='ml-0 lg:ml-20 mt-10'>
					<p className='font-normal text-[28px] leading-[100%] tracking-[0%] uppercase'>
						Contact Us today
					</p>
					<p className='max-w-[505px] font-normal text-sm leading-[140%] tracking-[0%] mt-7'>
						At Skin & Sage, we blend science and serenity to bring out your
						skin’s natural radiance. Contact us today and book your appointment!
					</p>
					<div className='h-full flex flex-col'>
						<input required name='name' type='text' placeholder='Name' />
						<input required name='email' type='email' placeholder='Email' />
						<input
							required
							name='contact-number'
							type='text'
							inputMode='numeric'
							pattern='[0-9]*'
							placeholder='Contact Number'
						/>
						<input
							required
							name='service-type'
							type='text'
							placeholder='Service Type'
						/>
						<textarea
							required
							name='Message'
							id='message'
							placeholder='Message'
							cols={4}
							rows={4}
						/>
					</div>
					<Button
						primary
						type='submit'
						label='Submit'
						size='medium'
						className='mt-3.5'
					/>
				</form>
			</div>
		</section>
	);
}
