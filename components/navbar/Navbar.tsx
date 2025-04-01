'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

interface NavItem {
	name: string;
	href: string;
	current?: boolean;
}

const navigation: NavItem[] = [
	{ name: 'Business', href: '#', current: true },
	{ name: 'Community', href: '#', current: false },
	{ name: 'Investor Relation', href: '#industries', current: false },
	{ name: 'NewsRoom', href: '#products', current: false },
	{ name: 'Careers', href: '#careers', current: false },
];

export const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={cn(
				'fixed w-full z-50 transition-all duration-300 bg-red-500 ',
				isScrolled ? 'shadow-md py-2' : ' py-4'
			)}
		>
			<div className="container-custom">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center flex-shrink-0">
						<span className="text-2xl font-bold text-gray-800">GARUSSA</span>
					</Link>

					{/* CTA Button */}
					<div className="hidden md:flex gap-8">
						<ul className="ml-10 flex items-center space-x-6">
							{navigation.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-sm "
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>

						<Button size="sm">Get Started</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						{/* <button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 hover:text-blue-600 focus:outline-none"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button> */}
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-lg">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm font-normal uppercase"
								aria-current={item.current ? 'page' : undefined}
								onClick={() => setIsOpen(false)}
							>
								{item.name}
							</Link>
						))}
						<div className="pt-2"></div>
					</div>
				</div>
			)}
		</nav>
	);
};
