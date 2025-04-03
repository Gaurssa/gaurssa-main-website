import { AboutUs } from '@/components/about-us/AboutUs';
import { GeoStatsOverview } from '@/components/geo-stats-overview/GeoStatsOverview';
import { HeroSection } from '@/components/hero-section/HeroSection';

const page = () => {
	return (
		<>
			<HeroSection />
			<AboutUs />
			<GeoStatsOverview />
		</>
	);
};

export default page;
