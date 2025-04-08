import { CircularArrowIcon } from '@/assets/icons/CircularArrowIcon';
import { Button } from '../ui/button';
import { GcgSubsidairyLogo } from './GcgSubsidairyLogo';

export const GcgSubsidairyDescription = () => {
	return (
		<div className="lg:max-w-[45rem] md:max-w-[36rem] mt-[30rem] md:mt-0 px-4 w-full ">
			<p className="text-neutral-200 font-normal">
				A Subsidiary of the Eyewear Industry
			</p>
			<h3 className="text-neutral-50 font-extrabold text-2xl md:text-6xl ">
				GCG EYEWARE
			</h3>
			<p className="text-neutral-200 font-normal mt-4 md:mt-5 text-wrap">
				At GCG Eyewear, we believe that your eyewear should not only offer
				clarity but also reflect your unique style. Our extensive collection
				features a wide range of frames, available in diverse materials, shapes,
				and colors, ensuring that there’s something for everyone. Whether you’re
				looking for timeless elegance, modern trends, or bold statements, our
				eyewear is designed to provide exceptional comfort, durability, and
				style.
			</p>

			<Button
				variant={'secondary'}
				size={'sm'}
				className="flex gap-4 items-center mt-6 md:mt-8 group  "
			>
				<span>Visit website</span>
				<CircularArrowIcon
					width={20}
					height={20}
					className=" stroke-neutral-50  fill-none group-hover:stroke-primary-600 transition-all duration-300"
				/>
			</Button>

			<div className="flex flex-col gap-8 mt-12 md:mt-36">
				<GcgSubsidairyLogo />
				<GcgSubsidairyLogo />
			</div>
		</div>
	);
};
