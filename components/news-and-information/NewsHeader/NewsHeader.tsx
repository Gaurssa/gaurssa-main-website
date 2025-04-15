'use client';

import { useEffect, useState } from 'react';
import { NewsCategory } from '../NewsCategory/NewsCategory';
import { NewsSearch } from '../NewsSearch/NewsSearch';

export const NewsHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	// const [selectedCategory, setSelectedCategory] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 15) {
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
		<>
			<h1
				className={`text-black font-normal font-dm-serif   transition-all duration-1000   lg:leading-24 leading-20 ${isScrolled ? 'h-[4rem] text-h1' : 'text-[2rem] sm:text-[4rem] lg:text-[7rem] md:text-[5rem] md:h-[20rem]   sm:h-[16rem] h-[10rem]'}`}
			>
				News & Information
			</h1>
			<div className="flex md:flex-row flex-col gap-4  justify-between md:items-center">
				<NewsCategory />
				<NewsSearch />
			</div>
		</>
	);
};
