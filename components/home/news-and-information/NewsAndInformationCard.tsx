import { CircularArrowIcon } from '@/assets/icons/CircularArrowIcon';
import { NewsCard } from '../../shared/news-card/NewsCard';
import { Button } from '../../ui/button';

export const NewsAndInformationCard = () => {
	return (
		<NewsCard.Root>
			<NewsCard.Header>Company Newsroom</NewsCard.Header>

			<NewsCard.Link href="#">
				<NewsCard.Action>
					<Button
						variant="tertiary"
						className="flex items-center !p-2 group-hover:bg-primary-600 transition-all duration-300 h-fit"
					>
						<CircularArrowIcon
							width={20}
							height={20}
							className="stroke-primary-600 fill-none group-hover:stroke-neutral-50 transition-all duration-300"
						/>
					</Button>
				</NewsCard.Action>

				<NewsCard.Image src="/home/blog-1.jpeg" alt="Blog" />
				<NewsCard.Content>
					<div className="flex flex-col gap-3">
						<NewsCard.Title>
							GCG: Innovating for a Sustainable Future in Global Business
						</NewsCard.Title>

						<NewsCard.Description>
							A dynamic leader, GCG is reshaping the standards of excellence
							through innovation, strategic growth, and a commitment to
							sustainability. With a strong presence in technology, healthcare,
							and renewable resources, the company continues to set new
							benchmarks for quality, efficiency, and corporate responsibility.
						</NewsCard.Description>
					</div>

					<NewsCard.Footer>
						<span>GCG Welcome Desk</span> | <span>February 23, 2025</span>
					</NewsCard.Footer>
				</NewsCard.Content>
			</NewsCard.Link>
		</NewsCard.Root>
		// <div className="  w-full    group md:max-w-[35rem] md:min-w-[35rem]  md:w-[35rem] sm:max-w-[20rem] sm:min-w-[20rem]  sm:w-[20rem]  md:h-[42rem] ">
		// 	<h2 className="text-primary-600 font-medium mb-1">Company Newsroom</h2>

		// 	<Link
		// 		href="#"
		// 		className="relative bg-neutral-50 cursor-pointer hover:shadow-[0px_10px_10px_rgba(0,0,0,0.1)]  block transition-shadow duration-300"
		// 	>
		// 		<Button
		// 			variant={'tertiary'}
		// 			className="absolute right-4 top-4  flex items-center !p-2 group-hover:bg-primary-600 trasition-all duration-300 h-fit"
		// 		>
		// 			<CircularArrowIcon
		// 				width={20}
		// 				height={20}
		// 				className=" stroke-primary-600  fill-none group-hover:stroke-neutral-50 transition-all duration-300 "
		// 			/>
		// 		</Button>

		// 		<div className="h-[14rem] sm:h-[20rem] overflow-hidden">
		// 			<Image
		// 				src={'/home/blog-1.jpeg'}
		// 				alt="blog 1"
		// 				width={1000}
		// 				height={1000}
		// 				className="object-center object-cover w-full h-full"
		// 			/>
		// 		</div>

		// 		<div className="flex justify-between gap-16 sm:gap-32 flex-col p-4 md:p-6 border-x border-b border-gray-200   ">
		// 			<div className="flex flex-col gap-3">
		// 				<h3 className="text-gray-950 text-2xl/6 font-normal line-clamp-2">
		// 					GCG: Innovating for a Sustainable Future in Global Business
		// 				</h3>
		// 				<Text className="line-clamp-2">
		// 					A dynamic leader, GCG is reshaping the standards of excellence
		// 					through innovation, strategic growth, and a commitment to
		// 					sustainability. With a strong presence in technology, healthcare,
		// 					and renewable resources, the company continues to set new
		// 					benchmarks for quality, efficiency, and corporate responsibility.
		// 				</Text>
		// 			</div>

		// 			<p className="flex items-center gap-2 text-gray-600 font-light text-[12px] md:text-sm  ">
		// 				<span>GCG Welcome Desk</span> | <span>February 23, 2025</span>
		// 			</p>
		// 		</div>
		// 	</Link>
		// </div>
	);
};
