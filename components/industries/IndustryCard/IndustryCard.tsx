'use client';

import { CircularArrowIcon } from '@/assets/icons/CircularArrowIcon';
import { CompaniesType } from '@/constants/industries/industries';
import { useScreenSize } from '@/hooks/useScreenSize';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const IndustryCard = ({ data }: { data: CompaniesType }) => {
	const isMobileScreen = useScreenSize(1024, 'max');
	return isMobileScreen ? (
		<Link
			href={`#`}
			className="group flex flex-col items-center justify-center   h-[25.6rem] overflow-hidden relative"
		>
			<Image
				src={data.image}
				alt="Link"
				className="h-full w-full object-cover object-center"
				width={1000}
				height={1000}
			/>

			<div
				className={cn(
					' w-full h-full bg-[linear-gradient(to_bottom,_transparent_0%_,transparent_60%_,black_90%)] z-[10]  flex justify-end flex-col gap-2  absolute bottom-0 p-3 left-0'
				)}
			>
				<div className="w-10 h-auto">
					<Image
						src={data.logo}
						alt={data.name}
						width={1000}
						height={1000}
						className="w-full h-full"
					/>
				</div>

				<span className="text-neutral-50 text-2xl font-light uppercase tracking-wide">
					{data.name}
				</span>
			</div>
		</Link>
	) : (
		<Link
			href={`#`}
			className="group flex flex-col gap-2 items-center justify-center   h-[25.6rem] overflow-hidden relative border border-gray-200 "
		>
			<Image
				src={data.image}
				alt={data.name}
				className="h-full w-full object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
				width={1000}
				height={1000}
			/>

			<Image
				src={data.logo}
				alt="Logo"
				width={1000}
				height={1000}
				className="w-10 h-auto"
			/>
			<span className="text-gray-800 text-2xl font-light uppercase tracking-wide">
				{data.name}
				{/* Vision Craft */}
			</span>
			<CircularArrowIcon className="w-6 h-6 stroke-gray-600" />
		</Link>
	);
};
