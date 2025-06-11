import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { GoHeart } from 'react-icons/go';
import {
	NavLinks,
	NavIcons,
	ConnectRow,
	SliderData,
	AboutCards,
	FooterLinks,
	SocialLinks,
	CategoryData,
} from '@/modules/modules';

export const navLinks: NavLinks = [
	{ link: 'About', url: '/about' },
	{ link: 'Shop by category', url: '#category' },
];

export const navIcons: NavIcons = [
	{ url: '', icon: GoHeart },
	{ url: '', icon: FiShoppingBag },
];

export const sliderData: SliderData = [
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/5fc6b8b8-eca1-4a49-9739-d2ddec225243/Lakme-9to5-Powerplay-Priming-Concealer-Built-in-Primer-Hydrating-34-Almond.jpg',
		productName: 'Product Name',
		price: '100',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/18b39fd9-e045-48a2-9350-70e946957db4/FACES-CANADA-Ultime-Pro-Makeup-Fixer-Primer-Setting-Spray.jpeg',
		productName: 'Product Name',
		price: '100',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/eabcaa91-fb50-4a30-a26b-cd8e3cd96041/Renee-Glass-Glow-Pre-Make-Up-Oil.jpg',
		productName: 'Product Name',
		price: '100',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/cbad9424-9c30-43e2-b83e-985a6fb16c5f/Swiss-Beauty-Real-Make-Up-Base-Highlighting-Primer-01-Natural-Tint.jpg',
		productName: 'Product Name',
		price: '100',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/98654692-7cbf-44ff-b493-677c00928259/Dot-Key-Strawberry-Dew-In-the-Spotlight-Strobe-Cream.jpg',
		productName: 'Product Name',
		price: '100',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/42794333-85f6-40a0-9931-8769e3fa7c5b/Swiss-Beauty-Cream-It-Up-Blusher-With-Shea-Butter-2-Natural-Flush.jpeg',
		productName: 'Product Name',
		price: '100',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/da19831c-80fb-4406-b560-6151f64ebda7/Lakme-Makeup-Skincare-VitC-Superglow-Skin-Perfecting-Tint-Neutral-Nude-N200.jpg',
		productName: 'Product Name',
		price: '100',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1080,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/df9e3857-b36b-46d5-884c-8504cc9b572f/The-Face-Shop-Rice-Water-Bright-Light-Cleansing-Oil.jpg',
		productName: 'Product Name',
		price: '100',
	},
];

export const categoryData: CategoryData = [
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-400,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/5fc6b8b8-eca1-4a49-9739-d2ddec225243/Lakme-9to5-Powerplay-Priming-Concealer-Built-in-Primer-Hydrating-34-Almond.jpg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/18b39fd9-e045-48a2-9350-70e946957db4/FACES-CANADA-Ultime-Pro-Makeup-Fixer-Primer-Setting-Spray.jpeg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/eabcaa91-fb50-4a30-a26b-cd8e3cd96041/Renee-Glass-Glow-Pre-Make-Up-Oil.jpg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/cbad9424-9c30-43e2-b83e-985a6fb16c5f/Swiss-Beauty-Real-Make-Up-Base-Highlighting-Primer-01-Natural-Tint.jpg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/98654692-7cbf-44ff-b493-677c00928259/Dot-Key-Strawberry-Dew-In-the-Spotlight-Strobe-Cream.jpg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/42794333-85f6-40a0-9931-8769e3fa7c5b/Swiss-Beauty-Cream-It-Up-Blusher-With-Shea-Butter-2-Natural-Flush.jpeg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1080,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/df9e3857-b36b-46d5-884c-8504cc9b572f/The-Face-Shop-Rice-Water-Bright-Light-Cleansing-Oil.jpg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/da19831c-80fb-4406-b560-6151f64ebda7/Lakme-Makeup-Skincare-VitC-Superglow-Skin-Perfecting-Tint-Neutral-Nude-N200.jpg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image:
			'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/98654692-7cbf-44ff-b493-677c00928259/Dot-Key-Strawberry-Dew-In-the-Spotlight-Strobe-Cream.jpg',
		categoryName: 'Catergory Name',
		categoryDescription: 'What is the category about ',
		categoryText:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
];

export const connectRow: ConnectRow = [
	{
		image: '/images/Grey-placeholder.png',
		likes: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image: '/images/Grey-placeholder.png',

		likes: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image: '/images/Grey-placeholder.png',

		likes: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
	{
		image: '/images/Grey-placeholder.png',

		likes: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.',
	},
];

export const footerLinks: FooterLinks = [
	{ link: '/', text: 'Home' },
	{ link: '', text: 'Products' },
	{ link: '', text: 'Contact Us' },
	{ link: '', text: 'Privacy Policy' },
];

export const socialLinks: SocialLinks = [
	{
		link: 'https://www.instagram.com/p/DKuVXM7ogxu/?igsh=MWhhdjJhaWdhd2V6bA==',
		icon: <BsInstagram size={20} color='white' />,
	},
	{
		link: '',
		icon: <BsFacebook size={20} color='white' />,
	},
	{
		link: '',
		icon: <BsLinkedin size={20} color='white' />,
	},
];

export const aboutCards: AboutCards = [
	{
		image: '/images/About-card-1.png',
		text: 'Discover a sanctuary of advanced laser treatments and holistic aesthetics',
		width: 85,
		height: 108,
	},
	{
		image: '/images/About-card-2.png',
		text: 'Every service is a step in your wellness journey-safe, effective, and tailored to your unique needs.',
		width: 66,
		height: 98,
	},
	{
		image: '/images/About-card-3.png',
		text: 'From laser hair and tattoo removal to PICO facials, we deliver expert care and medical-grade results, all with a gentle touch.',
		width: 102,
		height: 96,
	},
	{
		image: '/images/About-card-4.png',
		text: 'With advanced Skin Lab training, our team brings skilled hands and personalized care to every step of your skincare journey.',
		width: 82,
		height: 85,
	},
];
