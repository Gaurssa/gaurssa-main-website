'use client';

import { ScrollableHeader } from '@/components/shared/scrollable-header/ScrollableHeader';
import { NewsCategory } from '../NewsCategory/NewsCategory';
import { NewsSearch } from '../NewsSearch/NewsSearch';

export const NewsHeader = () => {
	return (
		<>
			<ScrollableHeader>News and Information</ScrollableHeader>
			<div className="flex md:flex-row flex-col gap-4  justify-between md:items-center">
				<NewsCategory />
				<NewsSearch />
			</div>
		</>
	);
};
