import { ResponsiveSliderStyles, SliderSyles } from '@/modules/modules';

export const videoUrl: string = 'https://www.youtube.com/embed/9e5wY1rRnM4';

export const defaultResponsive: ResponsiveSliderStyles = {
	desktop: { breakpoint: { max: 3000, min: 1360 }, items: 3 },
	tablet: { breakpoint: { max: 1360, min: 720 }, items: 2 },
	mobile: { breakpoint: { max: 720, min: 0 }, items: 2 },
};

export const sliderStyles: SliderSyles = {
	swipeable: true,
	draggable: true,
	showDots: false,
	responsive: defaultResponsive,
	ssr: false,
	autoPlay: true,
	infinite: true,
	autoPlaySpeed: 3000,
	keyBoardControl: true,
	itemClass: 'flex item-center justify-center mr-0',
};
