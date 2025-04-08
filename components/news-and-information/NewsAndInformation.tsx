import { NewsAndInformationCard } from './NewsAndInformationCard';

export const NewsAndInformation = () => {
	return (
		<>
			<div>
				<h2 className="text-[44px] font-dm-serif max-w-[110rem] mx-auto px-20">
					News & Information
				</h2>
			</div>
			<div className="overflow-x-auto [scrollbar-width:none] w-full">
				<div className="flex   py-10  max-w-[110rem] mx-auto gap-6  justify-start  px-20">
					<NewsAndInformationCard />
					<NewsAndInformationCard />
					<NewsAndInformationCard />
				</div>
			</div>
		</>
	);
};
