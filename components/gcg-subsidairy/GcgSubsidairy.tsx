import { GcgSubsidairyDescription } from './GcgSubsidairyDescription';
import { GcgSubsidairyModel } from './GcgSubsidairyModel';

export const GcgSubsidairy = () => {
	return (
		<div className="max-w-[77.5rem] mx-auto h-full flex justify-between items-center relative  ">
			<GcgSubsidairyModel />
			<GcgSubsidairyDescription />
		</div>
	);
};
