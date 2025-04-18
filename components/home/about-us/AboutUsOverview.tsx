import { ArrowDownPointIcon } from '@/assets/icons/ArrowDownPointIcon';
import { HighlightedText } from '@/components/shared/highlighted-text/HighlightedText';
import { Button } from '../../ui/button';
import { Text } from '../../ui/text';

export const AboutUsOverview = () => {
	return (
		<div className="flex flex-col md:gap-2 gap-1 row-start-1 row-end-2 lg:col-start-1 lg:col-end-4 col-start-1 -col-end-1 ">
			<h2 className="text-[32px] md:text-[44px] font-dm-serif">
				Future Forged
			</h2>
			{/* <p className="text-gray-800 md:text-xl text-base  w-full font-light"> */}
			<Text size={'xl'}>
				We&apos;re building a sustainable and {/* <Highlightedt */}
				<HighlightedText>connecting tomorrow</HighlightedText>, driving towards
				transformative innovation, focused on{' '}
				<HighlightedText>energy efficiency </HighlightedText>
				and environmental responsibility. We push technological boundaries to
				advance global mobility,{' '}
				<HighlightedText> minimize our carbon footprint</HighlightedText>, and
				foster energy independence, ensuring{' '}
				<HighlightedText>sustainable growth for all</HighlightedText>.
			</Text>
			{/* </p> */}
			<Button
				variant={'primary'}
				size={'sm'}
				className="group flex gap-4 items-center mt-4 pr-2 "
			>
				<span>Learn more about us</span>
				<span className="border border-primary-600 rounded-full p-[10.5px] group-hover:border-primary-200 transition-colors duration-300">
					<ArrowDownPointIcon className="w-4  h-4 -rotate-90  stroke-primary-600 stroke-1 hover:stroke-neutral-50 group-hover:stroke-neutral-50 transition-colors duration-300 fill-none" />
				</span>
			</Button>
		</div>
	);
};
