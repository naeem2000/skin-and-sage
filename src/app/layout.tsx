import localFont from 'next/font/local';
import Footer from '@/stories/Footer';
import type { Metadata } from 'next';
import Nav from '../stories/Nav';
import './globals.css';

export const metadata: Metadata = {
	title: 'Skin & Sage',
	description: 'Generated by create next app',
	robots: 'index, follow',
};

const Gothic = localFont({
	src: '../../public/fonts/CenturyGothic.ttf',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${Gothic.className} antialiased`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
