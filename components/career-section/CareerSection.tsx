import Image from 'next/image';
import { Button } from '../ui/button';

export const CareerSection = () => {
	return (
		<div className="max-w-[42rem] mx-auto flex relative items-center justify-center flex-col">
			<div className="w-[32rem] ">
				<Image
					src={'/home/group-people.png'}
					alt="group of people"
					width={1000}
					height={1000}
				/>
			</div>
			<h2 className="text-[44px] font-dm-serif mt-4">
				Join a Workplace That Values You!
			</h2>
			<p className="text-gray-800 text-center max-w-[30rem] ">
				At Gaurssa Group of Company, we don’t just work, we grow, innovate, and
				make an impact!
			</p>

			<Button variant={'primary-outline'} className="mt-4">
				View all Opening
			</Button>

			<div className="w-[10rem] absolute -bottom-12 right-[7rem] rotate-[90deg]">
				<Image
					src={'/home/arrow.gif'}
					alt="Career Arrow"
					width={1000}
					height={1000}
					className="invert"
				/>
			</div>
		</div>
	);
};
