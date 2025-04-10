import { ArrowDownPointIcon } from '@/assets/icons/ArrowDownPointIcon';
import { Button } from '../ui/button';

export const AboutUsOverview = () => {
	return (
		<div className="flex flex-col md:gap-2 gap-1 row-start-1 row-end-2 lg:col-start-1 lg:col-end-4 col-start-1 -col-end-1 ">
			<h2 className="text-[32px] md:text-[44px] font-dm-serif">
				Future Forged
			</h2>
			<p className="text-gray-800 md:text-xl text-base  w-full font-light">
				We&apos;re building a sustainable and{' '}
				<span className="text-primary-600 font-semibold">
					connecting tomorrow
				</span>
				, driving towards transformative innovation, focused on{' '}
				<span className="text-primary-600 font-semibold">
					energy efficiency
				</span>{' '}
				and environmental responsibility. We push technological boundaries to
				advance global mobility,{' '}
				<span className="text-primary-600 font-semibold">
					minimize our carbon footprint
				</span>
				, and foster energy independence, ensuring{' '}
				<span className="text-primary-600 font-semibold">
					sustainable growth for all
				</span>
				.
			</p>
			<Button
				variant={'primary'}
				size={'lg'}
				className="group flex gap-4 items-center mt-4 pr-2"
			>
				<span>Learn more about us</span>
				<span className="border border-primary-600 rounded-full p-[1px] group-hover:border-primary-200 transition-colors duration-300">
					<ArrowDownPointIcon className="w-5  h-5 -rotate-90  stroke-primary-600 stroke-1 hover:stroke-neutral-50 group-hover:stroke-neutral-50 transition-colors duration-300 fill-none" />
				</span>
				{/* <span className="border border-primary-600 rounded-full p-0.5 group-hover:border-primary-200 transition-colors duration-300">
					<ArrowRightIcon className="w-0.5 h-0.5 stroke-primary-600 stroke-1 hover:stroke-neutral-50 group-hover:stroke-neutral-50 transition-colors duration-300" />
				</span> */}
			</Button>
		</div>
	);
};
