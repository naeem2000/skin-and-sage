import { ResponsiveSliderStyles, SliderSyles } from '@/modules/modules';

export const defaultResponsive: ResponsiveSliderStyles = {
	desktop: { breakpoint: { max: 3000, min: 1360 }, items: 3 },
	tablet: { breakpoint: { max: 1360, min: 720 }, items: 2 },
	mobile: { breakpoint: { max: 720, min: 0 }, items: 1 },
};

export const CategorySlides = {
	desktop: { breakpoint: { max: 3000, min: 1360 }, items: 4 },
	tablet: { breakpoint: { max: 1360, min: 720 }, items: 3 },
	mobile: { breakpoint: { max: 720, min: 0 }, items: 1 },
};

export const sliderStyles: SliderSyles = {
	swipeable: true,
	draggable: true,
	showDots: false,
	responsive: defaultResponsive,
	ssr: true,
	autoPlay: true,
	infinite: false,
	autoPlaySpeed: 3000,
	keyBoardControl: true,
	itemClass: 'mr-0 md:mr-2',
};
