import { ArrowDownPointIcon } from '@/assets/icons/ArrowDownPointIcon';
import { Button } from '../ui/button';
import { Text } from '../ui/text';

export const AboutUsOverview = () => {
	return (
		<div className="flex flex-col md:gap-2 gap-1 row-start-1 row-end-2 lg:col-start-1 lg:col-end-4 col-start-1 -col-end-1 ">
			<h2 className="text-[32px] md:text-[44px] font-dm-serif">
				Future Forged
			</h2>
			{/* <p className="text-gray-800 md:text-xl text-base  w-full font-light"> */}
			<Text size={'xl'}>
				We&apos;re building a sustainable and {/* <Highlightedt */}
				<HiglightedText>connecting tomorrow</HiglightedText>, driving towards
				transformative innovation, focused on{' '}
				<HiglightedText>energy efficiency </HiglightedText>
				and environmental responsibility. We push technological boundaries to
				advance global mobility,{' '}
				<HiglightedText> minimize our carbon footprint</HiglightedText>, and
				foster energy independence, ensuring{' '}
				<HiglightedText>sustainable growth for all</HiglightedText>.
			</Text>
			{/* </p> */}
			<Button
				variant={'primary'}
				size={'lg'}
				className="group flex gap-4 items-center mt-4 pr-2"
			>
				<span>Learn more about us</span>
				<span className="border border-primary-600 rounded-full p-[1px] group-hover:border-primary-200 transition-colors duration-300">
					<ArrowDownPointIcon className="w-5  h-5 -rotate-90  stroke-primary-600 stroke-1 hover:stroke-neutral-50 group-hover:stroke-neutral-50 transition-colors duration-300 fill-none" />
				</span>
			</Button>
		</div>
	);
};

const HiglightedText = ({ children }: { children: React.ReactNode }) => {
	return <span className="text-primary-600 font-semibold">{children}</span>;
};
