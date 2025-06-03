import { NavIcons, NavLinks } from '@/modules/modules';
import { GoHeart } from 'react-icons/go';
import { FiShoppingBag } from 'react-icons/fi';

export const navLinks: NavLinks = [
	{ link: 'About', url: '#about' },
	{ link: 'Shop by category', url: '#category' },
];

export const navIcons: NavIcons = [
	{ url: '', icon: GoHeart },
	{ url: '', icon: FiShoppingBag },
];
