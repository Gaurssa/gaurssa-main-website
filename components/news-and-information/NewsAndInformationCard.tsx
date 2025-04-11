import { CircularArrowIcon } from '@/assets/icons/CircularArrowIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Text } from '../ui/text';

export const NewsAndInformationCard = () => {
	return (
		<div className="  w-full   bg-neutral-50 group md:max-w-[35rem] md:min-w-[35rem]  md:w-[35rem] sm:max-w-[20rem] sm:min-w-[20rem]  sm:w-[20rem]  md:h-[42rem] ">
			<h2 className="text-primary-600 font-medium mb-1">Company Newsroom</h2>

			<Link href="#" className="relative   cursor-pointer">
				<Button
					variant={'tertiary'}
					className="absolute right-4 top-4  flex items-center py-4 !px-2 group-hover:bg-primary-600 trasition-all duration-300"
				>
					<CircularArrowIcon
						width={20}
						height={20}
						className=" stroke-primary-600  fill-none group-hover:stroke-neutral-50 transition-all duration-300 "
					/>
				</Button>

				<div className="h-[14rem] sm:h-[20rem] overflow-hidden">
					<Image
						src={'/home/blog-1.jpeg'}
						alt="blog 1"
						width={1000}
						height={1000}
						className="object-center object-cover w-full h-full"
					/>
				</div>

				<div className="flex justify-between gap-16 sm:gap-32 flex-col p-4 md:p-6 border-x border-b border-gray-200   ">
					<div className="flex flex-col gap-3">
						<h3 className="text-gray-950 text-2xl/6 font-normal line-clamp-2">
							GCG: Innovating for a Sustainable Future in Global Business
						</h3>
						<Text className="line-clamp-2">
							A dynamic leader, GCG is reshaping the standards of excellence
							through innovation, strategic growth, and a commitment to
							sustainability. With a strong presence in technology, healthcare,
							and renewable resources, the company continues to set new
							benchmarks for quality, efficiency, and corporate responsibility.
						</Text>
						{/* <p className="text-gray-800 font-light line-clamp-2">
							A dynamic leader, GCG is reshaping the standards of excellence
							through innovation, strategic growth, and a commitment to
							sustainability. With a strong presence in technology, healthcare,
							and renewable resources, the company continues to set new
							benchmarks for quality, efficiency, and corporate responsibility.
						</p> */}
					</div>

					<p className="flex items-center gap-2 text-gray-600 font-light text-[12px] md:text-sm  ">
						<span>GCG Welcome Desk</span> | <span>February 23, 2025</span>
					</p>
				</div>
			</Link>
		</div>
	);
};
