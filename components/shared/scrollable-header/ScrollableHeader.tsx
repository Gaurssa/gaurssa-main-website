'use client';

import { useEffect, useState } from 'react';

export const ScrollableHeader = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 5) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<h1
			className={`text-black font-normal font-dm-serif   transition-all duration-1000   lg:leading-24 leading-20  ease-in-out ${isScrolled ? ' text-[2rem] h-[5rem] mt-6 md:mt-10 ' : 'text-[2rem] sm:text-[4rem] lg:text-[7rem] md:text-[5rem] md:h-[20rem]   sm:h-[16rem] h-[10rem] mt-10 md:mt-20'}`}
		>
			{children}
		</h1>
	);
};
