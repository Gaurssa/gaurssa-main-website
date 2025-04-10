'use client';

import { ArrowDownPointIcon } from '@/assets/icons/ArrowDownPointIcon';
import { CrossIcon } from '@/assets/icons/CrossIcon';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { OutIcon } from '@/assets/icons/outIcon';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { BUSINESS_MEGAMENU, COMMUNITY_MEGAMENU } from '@/constants/navbar';
import { cn } from '@/lib/utils';
import { useNavControllerStore } from '@/store/useNavControllerStore';
import Link from 'next/link';
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

interface NavbarRootprops extends React.ComponentProps<'header'> {
	children: React.ReactNode;
}

const NavbarRoot = ({ children, className }: NavbarRootprops) => {
	const { activeMenu, isScrolled } = useNavControllerStore();
	return (
		<header
			className={cn(
				'fixed w-full z-50 transition-colors  bg-transaprent border-b duration-[700ms] border-neutral-50/20 backdrop-blur-lg  flex items-center justify-between px-4 lg:px-20',
				isScrolled ? 'shadow-md h-12 bg-[#0d0d0dcb]' : 'h-16',
				activeMenu === null ? '' : 'bg-neutral-50 ',
				className
			)}
		>
			{children}
		</header>
	);
};

const NavLink = ({ className }: React.ComponentProps<typeof Link>) => {
	return (
		<Link
			href="/"
			className={cn(
				`flex items-center flex-shrink-0 relative z-[200]`,
				className
			)}
		/>
	);
};

const List = ({ className }: React.ComponentProps<'li'>) => {
	return <li className={cn(`group px block`, className)} />;
};

const OpenButton = () => {
	const { setIsOpen } = useNavControllerStore();
	return (
		<Button
			variant={'transparent'}
			size={'fit'}
			className="md:hidden flex items-center"
			onClick={() => setIsOpen(true)}
		>
			<MenuIcon
				width={28}
				height={28}
				className=" stroke-neutral-50   transition-all duration-300 "
			/>
		</Button>
	);
};

const CloseButton = () => {
	const { setIsOpen } = useNavControllerStore();
	return (
		<Button
			variant={'transparent'}
			size={'fit'}
			className="md:hidden flex items-center"
			onClick={() => setIsOpen(false)}
		>
			<CrossIcon
				width={24}
				height={24}
				className=" stroke-gray-600   transition-all duration-300 stroke-2"
			/>
		</Button>
	);
};

const DesktopMenu = () => {
	const { setActiveMenu, activeMenu, isScrolled } = useNavControllerStore();
	return (
		<nav className="hidden md:flex items-center gap-4  h-full">
			<ul className="flex items-center  h-full gap-2 ">
				{navigation.map((item) =>
					!item.node ? (
						<li key={item.name} className="group px block">
							<Link
								href={item.href}
								className={`text-sm  uppercase group-hover:text-primary-400 text-neutral-50  cursor-pointer px-2 lg:px-6 block`}
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
							className="group  h-full flex items-center px-2 lg:px-6 cursor-pointer"
							onMouseEnter={() => setActiveMenu(item.id)}
							onMouseLeave={() => setActiveMenu(null)}
							key={item.id}
						>
							<div
								className={cn(
									'relative  overflow-hidden text-sm uppercase cursor-pointer flex  [&>svg]:transition-transform [&>svg]:duration-300',
									activeMenu !== null
										? activeMenu === item.id
											? 'text-primary-600 [&>svg]:stroke-primary-600 [&>svg]:-rotate-180' // Active dropdown menu is blue
											: 'text-gray-500 [&>svg]:stroke-gray-500' // Other items are gray when any dropdown is active
										: 'text-neutral-50 [&>svg]:text-neutral-50' // Default white text
								)}
							>
								<span className="inline-block transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-full">
									{item.name}
								</span>
								<span className="absolute top-0 left-0  inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
									{item.name}
								</span>

								<ArrowDownPointIcon className="w-5  h-5  ml-1	 stroke-1 stroke-neutral-50 group-hover:stroke-primary-600 transition-colors duration-300 fill-none" />
							</div>

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
	);
};

const MobileMenu = () => {
	const { setIsOpen, isOpen } = useNavControllerStore();
	return (
		<>
			<div
				className={`bg-black/70  w-full min-h-screen top-0 right-0 fixed duration-1000 transition-all ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} `}
			></div>
			<div
				className={`md:hidden transition-transform duration-1000 w-[80vw] p-6 ${isOpen ? 'translate-x-0 ' : 'translate-x-200 '} bg-white shadow-lg fixed h-screen  top-0 right-0 z-[300]`}
			>
				<div className="w-full flex justify-between ">
					<Link href="/" className="text-2xl font-bold text-gray-800">
						Gaurssa
					</Link>
					<Button
						variant={'transparent'}
						size={'fit'}
						className="md:hidden flex items-center"
						onClick={() => setIsOpen(false)}
					>
						<CrossIcon
							width={24}
							height={24}
							className=" stroke-gray-600   transition-all duration-300 stroke-2"
						/>
					</Button>
				</div>
				<nav className="">
					<Accordion type="single" className="min-w-full mt-4" collapsible>
						{navigation.map((item) => (
							<AccordionItem
								value={String(item.id)}
								key={item.id}
								className="border-b border-neutral-200 w-full  py-1 px-0"
							>
								{item.node ? (
									<AccordionTrigger
										className={`font-light uppercase text-base text-gray-400 no-underline data-[state=open]:no-underline hover:no-underline cursor-pointer py-4  w-full flex justify-between  ${item.node ? '[&>svg]:block' : '[&>svg]:hidden'}`}
										// onClick={() => setIsOpen(false)}
									>
										{item.name}
									</AccordionTrigger>
								) : (
									<Link
										href="/home"
										className="font-light uppercase text-base text-gray-400 no-underline data-[state=open]:no-underline hover:no-underline cursor-pointer  w-full flex justify-between py-4 "
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								)}
								<AccordionContent
									className="text-gray-800  text-base font-light max-w-full"
									onClick={() => setIsOpen(false)}
								>
									{item.node}
								</AccordionContent>
							</AccordionItem>
						))}
						{/* */}
					</Accordion>
				</nav>
			</div>
		</>
	);
};

export const Navbar = {
	Root: NavbarRoot,
	Link: NavLink,
	List,
	OpenButton,
	CloseButton,
	MobileMenu,
	DesktopMenu,
};
