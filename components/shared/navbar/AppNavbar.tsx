'use client';

import { useScreenSize } from '@/hooks/useScreenSize';
import { Navbar } from './Navbar';

export const AppNavbar = () => {
	const screenSize = useScreenSize(768, 'max');
	return (
		<Navbar.Root>
			<Navbar.Link href="/">
				<span className="text-2xl font-bold text-gray-800">GARUSSA</span>
			</Navbar.Link>
			{!screenSize ? (
				<Navbar.DesktopMenu />
			) : (
				<>
					<Navbar.OpenButton />
					<Navbar.MobileMenu />
				</>
			)}
		</Navbar.Root>
	);
};
