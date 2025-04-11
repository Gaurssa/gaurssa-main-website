import { CircularArrowIcon } from '@/assets/icons/CircularArrowIcon';
import { Button } from '../ui/button';

export const SubsidairyButton = () => {
	return (
		<Button
			variant={'secondary'}
			size={'sm'}
			className="flex gap-4 items-center  md:mt-8 group  "
		>
			<span>Visit website</span>
			<CircularArrowIcon
				width={20}
				height={20}
				className=" stroke-neutral-50  fill-none group-hover:stroke-primary-600 transition-all duration-300"
			/>
		</Button>
	);
};
