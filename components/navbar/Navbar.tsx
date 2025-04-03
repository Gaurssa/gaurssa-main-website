'use client';

import { OutIcon } from '@/assets/icons/outIcon';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

interface NavItem {
	id: number;
	name: string;
	href: string;
	current?: boolean;
	node?: React.ReactNode;
}

const navigation: NavItem[] = [
	{
		id: 1,
		name: 'Business',
		href: '#',
		current: true,
		node: <div>Hello world</div>,
	},
	{
		id: 2,
		name: 'Community',
		href: '#',
		current: false,
		node: <div>Hello world</div>,
	},
	{ id: 3, name: 'Investor Relation', href: '#industries', current: false },
	{ id: 4, name: 'NewsRoom', href: '#products', current: false },
	{ id: 5, name: 'Careers', href: '#careers', current: false },
];

export const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeMenu, setActiveMenu] = useState<number | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 5) {
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
				'fixed w-full z-50 transition-all duration-300 bg-transaprent border-b border-neutral-50/20 backdrop-blur-lg  flex items-center justify-between px-20',
				isScrolled ? 'shadow-md h-14' : 'h-16',
				activeMenu !== null ? 'bg-neutral-50' : ''
			)}
		>
			{/* Logo */}
			<Link href="/" className="flex items-center flex-shrink-0">
				<span className="text-2xl font-bold text-gray-800">GARUSSA</span>
			</Link>

			{/* CTA Button */}
			<div className="hidden md:flex items-center gap-8">
				<ul className="flex items-center gap-12">
					{navigation.map((item) => (
						<li key={item.name} className="group">
							{!item.node ? (
								<Link
									href={item.href}
									className="text-sm  uppercase group-hover:text-primary-400  cursor-pointer"
									aria-current={item.current ? 'page' : undefined}
								>
									<span
										className={`relative block overflow-hidden ${activeMenu !== null ? 'text-gray-400' : ''}`}
									>
										<span className="inline-block transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full">
											{item.name}
										</span>
										<span className="absolute top-0 left-0  inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
											{item.name}
										</span>
									</span>
								</Link>
							) : (
								<span
									className={`relative block overflow-hidden  ${activeMenu !== null ? 'text-gray-400' : 'text-neutral-50'}`}
									onMouseEnter={() => setActiveMenu(item.id)}
									onMouseLeave={() => setActiveMenu(null)}
								>
									<span className="inline-block transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full">
										{item.name}
									</span>
									<span className="absolute top-0 left-0  inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
										{item.name}
									</span>
								</span>
							)}

							{activeMenu === item.id && item.node && (
								<div className="absolute z-100 h-40 bg-neutral-50 w-screen inset-0 top-14">
									hello world {item.name}
								</div>
							)}
						</li>
					))}
				</ul>

				<Button className="flex items-center">
					<OutIcon className=" stroke-neutral-50 fill-none stroke-2 w-10 h-10" />
					<span className="">Investor Login</span>
				</Button>
			</div>

			{/* Mobile menu button */}
			<div className="md:hidden flex items-center"></div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-lg">
					<div className="px-2  space-y-1 sm:px-3">
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
					</div>
				</div>
			)}
		</nav>
	);
};
