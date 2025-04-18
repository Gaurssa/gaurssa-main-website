import { GCG_EYEWEAR_GALLERY } from '@/constants/industries/industries';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const IndustriesGallery = () => {
	return (
		<ul className="w-full max-w-[110rem] mx-auto lg:max-h-[61.5rem] h-[61.5rem] sm:max-h-[31.25rem] max-h-[21.25rem] lg:px-20 px-4  grid-cols-3 grid-rows-7 grid gap-4 md:gap-6 lg:gap-8">
			{GCG_EYEWEAR_GALLERY.map((gcg) => (
				<li
					className={cn(
						'block sticky  transition-all duration-1000',
						gcg.className
					)}
					key={gcg.id}
				>
					<Image
						src={gcg.image}
						alt="GCG IMAGE"
						width={1000}
						height={1000}
						className="w-full h-full object-cover object-center"
					/>
				</li>
			))}
		</ul>
	);
};
