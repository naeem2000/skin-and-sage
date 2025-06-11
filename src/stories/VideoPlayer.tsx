import React from 'react';

type Props = {
	videoUrl: string;
};

export default function VideoPlayer({ videoUrl }: Props) {
	return (
		<iframe
			className='w-full h-[300px] lg:h-[700px]'
			src={videoUrl}
			title='Skin that looks glow washed - Lakmé Blush & Glow Vitamin C Serum Facewash'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			allowFullScreen
		/>
	);
}
