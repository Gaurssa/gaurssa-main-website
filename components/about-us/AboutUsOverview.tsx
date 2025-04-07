import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/button';

export const AboutUsOverview = () => {
	return (
		<div className="flex flex-col gap-2 ">
			<h2 className="text-[44px] font-dm-serif">Future Forged</h2>
			<p className="text-gray-800 text-xl font-light">
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
				size={'sm'}
				className="group flex gap-4 items-center mt-4"
			>
				<span>Learn more about us</span>
				<span className="border border-primary-600 rounded-full p-0.5 group-hover:border-primary-200 transition-colors duration-300">
					<ArrowRightIcon className="w-0.5 h-0.5 stroke-primary-600 stroke-1 hover:stroke-neutral-50 group-hover:stroke-neutral-50 transition-colors duration-300" />
				</span>
			</Button>
		</div>
	);
};
