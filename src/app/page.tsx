import Nav from './components/Nav';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='max-width bg-[url(/images/home-bg.png)] bg-[top_left_-19rem] sm:bg-top bg-size-[1100px] md:bg-cover bg-no-repeat md:max-h-[854px] min-h-[600px]'>
			<Nav />
			<div className='flex flex-col items-center justify-center w-full md:min-h-[750px] min-h-[600px]'>
				<div className='flex flex-col items-center bg-[rgba(0,0,0,0.05)] shadow-[0px_0px_0px_rgba(0,0,0,0.2)] p-3'>
					<Image
						src={'/images/logo-white.png'}
						alt='logo'
						width={570}
						height={88}
						className='w-3xs md:w-[570px]'
					/>
					<div className='flex items-center justify-center mt-7'>
						<div className='border border-white h-[1px] w-24'></div>
						<h2 className='font-normal text-white text-xl leading-[100%] tracking-[5%] px-2.5'>
							Laser &nbsp;.&nbsp; Aesthetics
						</h2>
						<div className='border border-white h-[1px] w-24'></div>
					</div>
				</div>
			</div>
		</main>
	);
}
