import {
	HealthcareImpact,
	HealthcareInitiatives,
	HealthcareMetrics,
} from '@/components/healthcare/healthcare-description/HealthcareDescription';
import { HealthcareGallery } from '@/components/healthcare/healthcare-gallery/HealthcareGallery';
import { ScrollableHeader } from '@/components/shared/scrollable-header/ScrollableHeader';

const page = () => {
	return (
		<article className="flex flex-col min-h-screen md:mb-0 mb-28">
			<section className="md:sticky top-0  lg:px-20 px-4 z-100 bg-neutral-50 py-4">
				<ScrollableHeader>
					<h1>Healthcare</h1>
				</ScrollableHeader>
			</section>

			<HealthcareGallery />

			<div className="max-w-[73rem] ml-auto px-4 lg:px-40 flex flex-col md:gap-20">
				<HealthcareInitiatives />
				<HealthcareMetrics />
				<HealthcareImpact />
			</div>
		</article>
	);
};

export default page;
