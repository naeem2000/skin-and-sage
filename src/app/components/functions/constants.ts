import { ResponsiveSliderStyles, SliderSyles } from '@/modules/modules';

const responsive: ResponsiveSliderStyles = {
	desktop: { breakpoint: { max: 3000, min: 1360 }, items: 3 },
	tablet: { breakpoint: { max: 1360, min: 1024 }, items: 2 },
	mobile: { breakpoint: { max: 1024, min: 0 }, items: 1 },
};

export const sliderStyles: SliderSyles = {
	swipeable: true,
	draggable: true,
	showDots: false,
	responsive: responsive,
	ssr: true,
	autoPlay: true,
	infinite: false,
	autoPlaySpeed: 3000,
	keyBoardControl: true,
	itemClass: 'mr-2',
};
