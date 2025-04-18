import { CircularArrowIcon } from '@/assets/icons/CircularArrowIcon';
import { useScreenSize } from '@/hooks/useScreenSize';
import { NewsCard } from '../../shared/news-card/NewsCard';
import { Button } from '../../ui/button';

export const NewsLatest = () => {
	const isMobile = useScreenSize(768, 'max');
	return (
		<div className="md:flex gap-4 w-full block  lg:px-20 px-4">
			<NewsCard.Root className="w-full md:w-2/3 md:h-full md:max-w-2/3 md:min-w-2/3  sm:min-w-full sm:max-w-full sm:w-full h-full max-h-full">
				<NewsCard.Link
					href="#"
					className="flex w-full h-full sm:w-full sm:max-w-full sm:min-w-full "
				>
					<div className="relative w-full h-full ">
						<NewsCard.Image src="/home/blog-1.jpeg" alt="Blog" className="" />
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
					</div>
					<NewsCard.Content className="border gap-12  justify-between w-[70%] p-2 md:p-2">
						<div className="flex flex-col gap-3">
							<NewsCard.Title>
								GCG: Innovating for a Sustainable Future in Global Business
							</NewsCard.Title>
							<NewsCard.Description>
								A dynamic leader, GCG is reshaping the standards of excellence
								through innovation, strategic growth, and a commitment to
								sustainability. With a strong presence in technology,
								healthcare, and renewable resources, the company continues to
								set new benchmarks for quality, efficiency, and corporate
								responsibility.
							</NewsCard.Description>
						</div>
						<NewsCard.Footer>
							<span>GCG Welcome Desk</span> | <span>February 23, 2025</span>
						</NewsCard.Footer>
					</NewsCard.Content>
				</NewsCard.Link>
			</NewsCard.Root>

			{!isMobile ? (
				<NewsCard.Root className="w-full md:w-1/3 md:max-w-1/3 md:min-w-1/3 md:h-full">
					{/* <NewsCard.Header>Company Newsroom</NewsCard.Header> */}
					<NewsCard.Link href="#" className="h-full">
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
						<NewsCard.Image
							src="/home/blog-1.jpeg"
							alt="Blog"
							className="h-[8rem] sm:h-[10rem]"
						/>
						<NewsCard.Content className=" sm:gap-10 md:p-2 ">
							<div className="flex flex-col gap-3 ">
								<NewsCard.Title className="text-xl/6 line-clamp-1">
									GCG: Innovating for a Sustainable Future in Global Business
								</NewsCard.Title>
								<NewsCard.Description>
									A dynamic leader, GCG is reshaping the standards of excellence
									through innovation, strategic growth, and a commitment to
									sustainability. With a strong presence in technology,
									healthcare, and renewable resources, the company continues to
									set new benchmarks for quality, efficiency, and corporate
									responsibility.
								</NewsCard.Description>
							</div>
							<NewsCard.Footer>
								<span>GCG Welcome Desk</span> | <span>February 23, 2025</span>
							</NewsCard.Footer>
						</NewsCard.Content>
					</NewsCard.Link>
				</NewsCard.Root>
			) : null}
		</div>
	);
};
