'use client';

import { SearchIcon } from '@/assets/icons/SearchIcon';
import { Select } from '@radix-ui/react-select';
import { useState } from 'react';
import { Input } from '../../ui/input';
import {
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../ui/select';

export const NewsSearch = () => {
	const [selectedCategory, setSelectedCategory] = useState('');
	return (
		<div className="h-10 w-full md:w-1/2  flex items-center justify-end    ">
			<Select
				value={selectedCategory}
				onValueChange={(value) => setSelectedCategory(value)}
			>
				<SelectTrigger className="h-full w-1/2 rounded-l-full bg-gray-50 border-none border-r border-r-gray-200 focus-visible:ring-1 focus-visible:ring-primary-200 text-gray-400 font-light">
					<SelectValue placeholder="Select Category" className="" />
				</SelectTrigger>

				<SelectContent className="bg-gray-50 border focus-visible:border-primary-200 relative z-[110]">
					<SelectGroup>
						{['News', 'Article', 'Story', 'Press Release'].map((category) => (
							<SelectItem
								value={category}
								key={category}
								className="text-gray-600 font-light"
							>
								{category}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<div className="relative w-full">
				<Input
					id="portfolioLink"
					className="border-none rounded-r-full py-1 text-base   px-4 bg-gray-50 focus-visible::border-none text-gray-600 placeholder:text-gray-400 placeholder:text-base font-light  "
					type="text"
					placeholder="Search Blog"
				/>

				<SearchIcon className="w-6 h-6 stroke-1 stroke-gray-400 absolute top-1.5 right-2" />
			</div>
		</div>
	);
};
