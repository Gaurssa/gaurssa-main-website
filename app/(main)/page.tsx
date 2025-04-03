import { AboutUs } from '@/components/about-us/AboutUs';
import { GeoStatsOverview } from '@/components/geo-stats-overview/GeoStatsOverview';
import { HeroSection } from '@/components/hero-section/HeroSection';

const page = () => {
	return (
		<div className="[scroll-snap-type:y_mandatory] max-h-screen overflow-y-scroll">
			<section className="h-screen relative [scroll-snap-align:start]">
				<HeroSection />
			</section>

			<section className=" h-screen overflow-hidden w-full [scroll-snap-align:start]">
				<AboutUs />
			</section>

			<section className="bg-black h-screen py-20 flex flex-col gap-10 [scroll-snap-align:start]">
				<GeoStatsOverview />
			</section>
		</div>
	);
};

export default page;
