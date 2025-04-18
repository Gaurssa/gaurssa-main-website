import { IndustryCard } from '@/components/industries/IndustryCard/IndustryCard';
import { ScrollableHeader } from '@/components/shared/scrollable-header/ScrollableHeader';
import { COMPANIES } from '@/constants/industries/industries';

const page = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<section className="md:sticky top-0  lg:px-20 px-4 z-100 bg-neutral-50 py-4">
				<ScrollableHeader>
					<h1>Eyeware</h1>
				</ScrollableHeader>
			</section>

			<div className="w-full ">
				{/* <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full lg:px-20 px-4 gap-4 lg:gap-0 max-w-[110rem] mx-auto"> */}
				<div className="w-full lg:px-20 px-4 gap-4 lg:gap-0 max-w-[110rem] mx-auto grid sm:grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] grid-cols-1">
					{COMPANIES.map((company) => (
						<IndustryCard data={company} key={company.slug} />
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
