import { NewsAndInformationCard } from './NewsAndInformationCard';

export const NewsAndInformation = () => {
	return (
		<>
			<h2 className="text-[44px] font-dm-serif max-w-[110rem] mx-auto ">
				News & Information
			</h2>
			<div className="flex justify-start  py-10  max-w-[110rem] mx-auto gap-6 [scrollbar-width:none] overflow-x-auto">
				<NewsAndInformationCard />
				<NewsAndInformationCard />
				<NewsAndInformationCard />
			</div>
		</>
	);
};
