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
	);
};
