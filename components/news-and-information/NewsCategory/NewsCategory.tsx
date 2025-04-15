'use client';

import { NEWS_CATEGORY } from '@/constants/news-and-information/news';
import { useState } from 'react';
import { Button } from '../../ui/button';

export const NewsCategory = () => {
	const [activeButton, setActiveButton] = useState<number | null>(null);

	return (
		<div className="flex items-center gap-3 w-full  [scrollbar-width:none] overflow-x-scroll">
			{NEWS_CATEGORY.map((location) => (
				<Button
					className={`bg-gray-100 text-gray-800 font-light h-fit px-3 py-1  hover:bg-primary-400 hover:text-neutral-50 cursor-pointer transition-all duration-300 ${activeButton === location.id ? 'bg-primary-400 text-neutral-50' : ''}`}
					key={location.id}
					onClick={() => setActiveButton(location.id)}
				>
					{location.label}
				</Button>
			))}
		</div>
	);
};
