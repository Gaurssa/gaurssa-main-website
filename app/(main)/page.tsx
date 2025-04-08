import { AboutUs } from '@/components/about-us/AboutUs';
import { CareerSection } from '@/components/career-section/CareerSection';
import { CSRCard } from '@/components/csr-section/CSRCard';
import { CSRSection } from '@/components/csr-section/CSRSection';
import { FAQSection } from '@/components/faq-section/FAQSection';
import { FieldOfWork } from '@/components/field-of-work/FieldOfWork';
import { GcgSubsidairy } from '@/components/gcg-subsidairy/GcgSubsidairy';
import { GeoStatsOverview } from '@/components/geo-stats-overview/GeoStatsOverview';
import { HeroSection } from '@/components/hero-section/HeroSection';
import { NewsAndInformation } from '@/components/news-and-information/NewsAndInformation';
import { CSR_DATA } from '@/constants/csr';

const Page = () => {
	// const { containerRef, setSectionRef } = useSmoothScroll();

	// console.log('CONTAINER REF', containerRef);

	return (
		<div>
			<section
				// ref={(el) => setSectionRef(el, 0)}
				className="h-screen relative "
			>
				<HeroSection />
			</section>
			<section
				// ref={(el) => setSectionRef(el, 1)}
				className="md:h-screen min-h-screen overflow-hidden w-full pt-10 md:pt-20 bg-neutral-50 px-4 md:px-20"
			>
				<AboutUs />
			</section>
			<section
				// ref={(el) => setSectionRef(el, 2)}
				className="bg-black h-fit lg:h-screen py-10 md:py-20 flex flex-col gap-10 px-0 lg:px-20"
			>
				<GeoStatsOverview />
			</section>
			<section
				// ref={(el) => setSectionRef(el, 3)}
				className="h-fit md:h-screen py-20 bg-neutral-50 "
			>
				<FieldOfWork />
			</section>
			<section
				// ref={(el) => setSectionRef(el, 4)}
				className="min-h-screen md:h-screen bg-black px-0 lg:px-20 md:py-0 py-10 overflow-hidden "
			>
				<GcgSubsidairy />
			</section>
			<section
				// ref={(el) => setSectionRef(el, 5)}
				className="min-h-screen py-20 bg-neutral-50  "
			>
				<NewsAndInformation />
			</section>
			<section
				// ref={(el) => setSectionRef(el, 6)}
				className="h-[60%] py-20 md:px-20 px-4 bg-neutral-50"
			>
				<CareerSection />
			</section>
			<section
				// ref={(el) => setSectionRef(el, 7)}
				className="h-fit md:h-screen my-auto py-20 bg-[#0D0D0D] relative overflow-hidden px-4 md:px-20"
			>
				<FAQSection />
				<span className="text-[#2A2A2A4D] text-[10rem]/0 font-extrabold -rotate-90 inline-block absolute bottom-1/2 -left-[18rem]">
					GAURSSA
				</span>
			</section>

			<section
				// ref={(el) => setSectionRef(el, 8)}
				className="h-fit md:h-screen py-10 md:py-20  bg-neutral-50 px-4 md:px-20  	"
			>
				<CSRSection />
				<ul className="flex flex-wrap md:flex-nowrap max-w-[54.3rem] mx-auto gap-4 mt-10">
					{CSR_DATA.map((csr) => (
						<CSRCard key={csr.id} data={csr} />
					))}
				</ul>
			</section>

			{/* <NavbarMegaMenu data={BUSINESS_MEGAMENU} /> */}
		</div>
	);
};

export default Page;
