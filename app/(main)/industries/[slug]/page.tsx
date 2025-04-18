import { IndustriesHorizontal } from '@/components/industries/IndsutriesHorizontal/IndustriesHorizontal';
import { IndustriesGallery } from '@/components/industries/industries-gallery/IndustriesGallery';
import { SubsidairyHeader } from '@/components/subsidairies/subsidairy-header/SubsidairyHeader';
import Image from 'next/image';

const page = () => {
	return (
		<div className="flex flex-col min-h-screen  ">
			<SubsidairyHeader />
			<IndustriesHorizontal />

			<section className="-mt-6 md:mt-6 lg:mt-8">
				<div className="w-full max-h-[42.5rem] overflow-hidden lg:px-20 px-4 max-w-[110rem] mx-auto">
					<Image
						src={'/industries/gcg-eyewear/gcg-eyewear-6.png'}
						alt="GCG EYEWEAR"
						width={1200}
						height={1200}
						className="w-full h-full object-cover object-center"
					/>
				</div>
			</section>

			<section className="flex flex-col lg:gap-8 md:gap-6 gap-4 mt-4 md:mt-6 lg:mt-8">
				<IndustriesGallery />
				<IndustriesGallery />
			</section>
		</div>
	);
};

export default page;
