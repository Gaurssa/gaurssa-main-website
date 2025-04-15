'use client';

import { NewsAndInformationCard } from '@/components/home/news-and-information/NewsAndInformationCard';
import { NewsHeader } from '@/components/news-and-information/NewsHeader/NewsHeader';
import { NewsLatest } from '@/components/news-and-information/NewsLatest/NewsLatest';

const page = () => {
	return (
		<div className="flex flex-col min-h-screen md:-mb-40">
			<section className="sticky top-0  md:px-20 px-4 z-100 bg-neutral-50 py-4">
				<NewsHeader />
			</section>

			<section className="w-full mt-8">
				<NewsLatest />
			</section>

			<section className="overflow-x-auto [scrollbar-width:none] w-full">
				<div className=" flex  sm:flex-row flex-col  py-10  max-w-[110rem] mx-auto justify-between gap-4 md:px-20 px-4 ">
					<NewsAndInformationCard />
					<NewsAndInformationCard />
					<NewsAndInformationCard />
				</div>
			</section>
		</div>
	);
};

export default page;
