import { ReactNode } from 'react';
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
	image: string;
	productName: string;
	price: string;
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

export type FooterLinks = {
	link: string;
	text: string;
}[];

export type SocialLinks = {
	link: string;
	icon: ReactNode;
}[];

export type AboutCards = {
	image: string;
	text: string;
	width: number;
	height: number;
}[];
