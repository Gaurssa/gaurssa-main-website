import { FieldOfWorkType } from '@/constants/field-of-work';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export const FieldOfWorkCard = ({ data }: { data: FieldOfWorkType }) => {
	return (
		<li className="relative w-[85vw] min-w-[85vw] sm:min-w-[21rem] sm:w-[21rem] h-[32.5rem] md:min-h-[41rem]   overflow-hidden  border border-gray-100">
			{/* Background Image */}

			<Image
				src={data.image}
				alt="Eyewear Model"
				className=" w-full h-full object-cover"
				width={1000}
				height={1000}
			/>

			<div className="absolute inset-0 bg-[linear-gradient(to_bottom,_white_15%,_transparent,_transparent)] p-6 flex flex-col ">
				<div>
					<h2 className="text-xl font-bold text-primary-600">{data.title}</h2>
					<p className="text-gray-800 font-normal text-wrap">{data.subtitle}</p>
					{/* <p className="text-gray-800 mt-4 font-light">
						GCG Eyewear combines precision, style, and functionality in every
						frame. Find the perfect pair to enhance your style.
					</p> */}
				</div>

				{/* Button */}
				<Button variant={'primary'} size={'lg'} className="gap-2 mt-4 pr-1.5 ">
					<span>Learn more</span>
					<span className="border border-primary-600 rounded-full w-6 h-6  group-hover:border-primary-200 transition-colors duration-300 flex items-center justify-center">
						<ArrowRightIcon className="w-4	 h-4	 stroke-primary-600 stroke-1 hover:stroke-neutral-50 group-hover:stroke-neutral-50 transition-colors duration-300" />
					</span>
				</Button>
			</div>
		</li>
	);
};
