import { Text } from '../ui/text';
import { GcgSubsidairyLogo } from './GcgSubsidairyLogo';
import { SubsidairyButton } from './SubsidairyButton';

export const GcgSubsidairyDescription = () => {
	return (
		<div className="lg:max-w-[45rem] md:max-w-[30rem] mt-[25rem] md:mt-0 px-4 w-full ">
			<div className="flex justify-between">
				<h3 className="text-neutral-50 font-extrabold text-2xl md:text-6xl ">
					GCG EYEWARE
				</h3>
				<div className="block md:hidden">
					<SubsidairyButton />
				</div>
			</div>
			<Text variant={'neutral'}>A Subsidiary of the Eyewear Industry</Text>

			<Text className="mt-4 md:mt-5 text-wrap" variant={'neutral'}>
				At GCG Eyewear, we believe that your eyewear should not only offer
				clarity but also reflect your unique style. Our extensive collection
				features a wide range of frames, available in diverse materials, shapes,
				and colors, ensuring that there&apos;s something for everyone. Whether
				you&apos;re looking for timeless elegance, modern trends, or bold
				statements, our eyewear is designed to provide exceptional comfort,
				durability, and style.
			</Text>
			<div className="hidden md:block">
				<SubsidairyButton />
			</div>
			<div className="flex flex-col gap-8 mt-12 md:mt-36">
				<GcgSubsidairyLogo />
				<GcgSubsidairyLogo />
			</div>
		</div>
	);
};
