import Image from 'next/image';

export const NewsAndInformationCard = () => {
	return (
		<div className="max-w-[35.5rem] min-w-[35.5rem] w-[35.5rem] h-[42rem] bg-neutral-50 ">
			<h2 className="text-primary-600 font-medium mb-1">Company Newsroom</h2>

			<div className="h-[20rem] overflow-hidden">
				<Image
					src={'/home/blog-1.jpeg'}
					alt="blog 1"
					width={1000}
					height={1000}
					className="object-center object-cover w-full h-full"
				/>
			</div>

			<div className="flex justify-between gap-32 flex-col p-6 border-x border-b border-gray-200   ">
				<div className="flex flex-col gap-4">
					<h3 className="text-gray-950 text-2xl font-normal line-clamp-2">
						GCG: Innovating for a Sustainable Future in Global Business
					</h3>
					<p className="text-gray-800 font-light line-clamp-2">
						A dynamic leader, GCG is reshaping the standards of excellence
						through innovation, strategic growth, and a commitment to
						sustainability. With a strong presence in technology, healthcare,
						and renewable resources, the company continues to set new benchmarks
						for quality, efficiency, and corporate responsibility.
					</p>
				</div>

				<p className="flex items-center gap-2 text-gray-600 font-light ">
					<span>GCG Welcome Desk</span> | <span>February 23, 2025</span>
				</p>
			</div>
		</div>
	);
};
