import { IconType } from 'react-icons';

export type NavLinks = {
	link: string;
	url: string;
}[];

export type NavIcons = {
	url: string;
	icon: IconType;
}[];

export type ResponsiveSliderStyles = {
	desktop: { breakpoint: { max: number; min: number }; items: number };
	tablet: { breakpoint: { max: number; min: number }; items: number };
	mobile: { breakpoint: { max: number; min: number }; items: number };
};

export type SliderSyles = {
	swipeable: boolean;
	draggable: boolean;
	showDots: boolean;
	responsive: ResponsiveSliderStyles;
	ssr: boolean;
	autoPlay: boolean;
	infinite: boolean;
	autoPlaySpeed: number;
	keyBoardControl: boolean;
	itemClass: string;
};

export type SliderData = {
	image: string | null;
	productName: string | null;
	price: string | null;
}[];

export type CategoryData = {
	image: string;
	categoryName: string;
	categoryDescription: string;
	categoryText: string;
}[];

export type ConnectRow = {
	image: string;
	likes: number;
	description: string;
}[];
