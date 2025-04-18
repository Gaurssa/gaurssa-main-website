import { HighlightedText } from '@/components/shared/highlighted-text/HighlightedText';
import { ScrollableHeader } from '@/components/shared/scrollable-header/ScrollableHeader';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const page = () => {
	return (
		<article>
			<section className="md:sticky top-0  lg:px-20 px-4 z-100 bg-neutral-50 py-4">
				<ScrollableHeader className="">
					<h1>Why Does GCG Exist?</h1>
				</ScrollableHeader>
			</section>

			<section className="w-full">
				<div className="px-4 lg:px-20 max-w-[110rem] mx-auto ">
					<Text className="max-w-[41.8rem] mr-auto">
						We&apos;re building a sustainable and{' '}
						<HighlightedText>connecting tomorrow</HighlightedText>, driving
						towards transformative innovation, focused on{' '}
						<HighlightedText>energy efficiency</HighlightedText> and
						environmental responsibility. We push technological boundaries to
						advance global mobility,{' '}
						<HighlightedText>minimize our carbon footprint</HighlightedText>,
						and foster energy independence,{' '}
						<HighlightedText>
							ensuring sustainable growth for all
						</HighlightedText>
						.
					</Text>
				</div>
			</section>

			<section className="flex ">
				<Image
					src="/industries/gcg-eyewear/gcg-eyewear-6.png"
					alt="About us"
					width={1000}
					height={1000}
					className="h-full w-1/3 object-cover object-center"
				/>
				<Image
					src="/industries/gcg-eyewear/gcg-eyewear-6.png"
					alt="About us"
					width={1000}
					height={1000}
					className="h-full w-1/3 object-cover object-center"
				/>
				<Image
					src="/industries/gcg-eyewear/gcg-eyewear-6.png"
					alt="About us"
					width={1000}
					height={1000}
					className="h-full w-1/3 object-cover object-center"
				/>
			</section>

			<section className="w-full mt-20 relative flex justify-center">
				<div className=" w-full h-full mt-40 ">
					<div
						className={cn(
							' w-full h-full bg-[linear-gradient(to_top,_transparent_0%_,transparent_40%_,white_90%)] absolute z-[10] top-0 flex flex-col self-end'
						)}
					></div>

					<Image
						src="/about-us/purpose-img-1.png"
						alt="About us"
						// layout="fill"
						// fill
						width={1200}
						height={1200}
						className="w-full h-full "
					/>
				</div>
				<div className="max-w-[35.8rem] mx-auto px-4 flex flex-col gap-4 absolute top-0 z-10 md:pt-20">
					<h2 className="text-h2 font-dm-serif text-primary-600 text-center">
						Let&apos;s talk purpose
					</h2>
					<Text className="text-center text-reading">
						We&apos;re building a future where technology and sustainability
						move in sync — powering industries with advanced mobility and
						helping reduce environmental impact, one breakthrough at a time.
					</Text>
				</div>
			</section>
		</article>
	);
};

export default page;
