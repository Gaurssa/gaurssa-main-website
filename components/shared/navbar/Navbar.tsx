'use client';

import { OutIcon } from '@/assets/icons/outIcon';
import { BUSINESS_MEGAMENU, COMMUNITY_MEGAMENU } from '@/constants/navbar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import { NavbarMegaMenu } from './NavbarMegaMenu';

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
		node: <NavbarMegaMenu data={BUSINESS_MEGAMENU} />,
	},
	{
		id: 2,
		name: 'Community',
		href: '#',
		current: false,
		node: <NavbarMegaMenu data={COMMUNITY_MEGAMENU} />,
	},
	// { id: 3, name: 'Investor Relation', href: '#industries', current: false },
	{ id: 4, name: 'NewsRoom', href: '#products', current: false },
	{ id: 5, name: 'Careers', href: '#careers', current: false },
];

export const Navbar: React.FC = () => {
	// const {
	// 	activeMenu,
	// 	isOpen,
	// 	isScrolled,
	// 	setIsOpen,
	// 	setIsScrolled,
	// 	setActiveMenu,
	// } = useNavControllerStore();
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeMenu, setActiveMenu] = useState<number | null>(null);
	// const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 5) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				'fixed w-full z-50 transition-colors  bg-transaprent border-b duration-[700ms] border-neutral-50/20 backdrop-blur-lg  flex items-center justify-between px-20',
				isScrolled ? 'shadow-md h-12 bg-[#0d0d0dcb]' : 'h-16',
				activeMenu === null ? '' : 'bg-neutral-50 '
			)}
		>
			{/* Logo */}
			<Link
				href="/"
				className="flex items-center flex-shrink-0 relative z-[200]"
			>
				<span className="text-2xl font-bold text-gray-800">GARUSSA</span>
			</Link>

			{/* CTA Button */}
			<nav className="hidden md:flex items-center gap-8  h-full">
				<ul className="flex items-center  h-full gap-4">
					{navigation.map((item) =>
						!item.node ? (
							<li key={item.name} className="group px block">
								<Link
									href={item.href}
									className="text-sm  uppercase group-hover:text-primary-400 text-neutral-50  cursor-pointer px-6 block"
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
							</li>
						) : (
							<li
								className="group  h-full flex items-center px-6 cursor-pointer"
								onMouseEnter={() => setActiveMenu(item.id)}
								onMouseLeave={() => setActiveMenu(null)}
								key={item.id}
							>
								<span
									className={cn(
										'relative  overflow-hidden text-sm uppercase cursor-pointer block ',
										activeMenu !== null
											? activeMenu === item.id
												? 'text-primary-600' // Active dropdown menu is blue
												: 'text-gray-500' // Other items are gray when any dropdown is active
											: 'text-neutral-50' // Default white text
									)}
								>
									<span className="inline-block transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full">
										{item.name}
									</span>
									<span className="absolute top-0 left-0  inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
										{item.name}
									</span>
								</span>

								<div
									className={`absolute   bg-neutral-50 w-screen inset-0 shadow-md  transition-all overflow-hidden  ${isScrolled ? 'top-12' : 'top-16'}   ${activeMenu === item.id && item.node ? ' duration-500 visible h-96 z-100' : 'h-0 z-[80]  invisible duration-700 pointer-events-none'}`}
								>
									<div
										className="w-full h-full "
										style={{
											opacity: activeMenu === item.id ? 1 : 0,
											transition: 'opacity 300ms',
											// This is key: content fades in AFTER background expands
											transitionDelay: activeMenu === item.id ? '200ms' : '0ms',
										}}
									>
										{item.node}
									</div>
								</div>
							</li>
						)
					)}
				</ul>

				<Button className="flex items-center gap-2 py-0.5 relative z-[200]">
					<OutIcon className=" stroke-neutral-50 fill-none  w-6 h-6 stroke-1" />
					<span className="uppercase">Investor Login</span>
				</Button>
			</nav>

			{/* Mobile menu button */}
			{/* <div className="md:hidden flex items-center"></div> */}

			{/* Mobile menu */}
			{/* {isOpen && (
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
			)} */}
		</header>
	);
};
