'use client';

import { CircularArrowIcon } from '@/assets/icons/CircularArrowIcon';
import { VectorGlass } from '@/components/shared/VectorGlass/VectorGlass';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useScreenSize } from '@/hooks/useScreenSize';
import { useScrollingEffect } from '@/hooks/useScrollingEffect';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const SubsidairyHeader = () => {
	const { isScrolled } = useScrollingEffect({ scrollingValue: 5 });
	const isLargeScreen = useScreenSize(1024, 'min');
	return (
		<section
			className={cn(
				'top-12  lg:sticky transition-all duration-1000 px-4 lg:px-20  z-100 w-full bg-neutral-50 ',
				isScrolled ? 'mt-10' : 'mt-12'
			)}
		>
			<div className="max-w-[110rem] mx-auto flex lg:flex-row flex-col py-4  justify-between lg:gap-8 items-stretch lg:items-end ">
				<div
					className={cn(
						'lg:w-[80%] xl:w-2/3 flex flex-col gap-2 '
						// isScrolled ? 'md:w-1/2' : ''
					)}
				>
					<div className="items-center gap-4 flex ">
						<div
							className={cn(
								' transition-all duration-1000',
								isLargeScreen && isScrolled
									? 'w-12 h-12 '
									: 'md:w-24 md:h-24 sm:w-16 sm:h-16 w-12 h-12'
							)}
						>
							<Image
								src={'/industries/eyewear/gcg-eyewear-logo-original.png'}
								alt="GCG Eyeware"
								width={1000}
								height={1000}
								className="w-full h-full object-contain"
							/>
						</div>
						<span
							className={cn(
								` text-black font-dm-serif transition-all duration-1000  `,
								isLargeScreen && isScrolled
									? 'md:text-[44px] text-[32px]'
									: 'text-[2rem] sm:text-[4rem] lg:text-[6rem] md:text-[5rem]'
							)}
						>
							GCG Eyewear
						</span>{' '}
					</div>
					<Text className="bg-white ">
						Vision Craft is a cutting-edge design studio that blends artistry
						with technology to create immersive and visionary experiences.
						Specializing in bespoke visual solutions, Vision Craft transforms
						concepts into captivating realities through innovative graphics,
						dynamic 3D modeling, and interactive digital environments. Whether
						developing striking brand identities or designing engaging virtual
						worlds, Vision Craft is dedicated to pushing the boundaries of
						creativity and delivering visually stunning results.
					</Text>
				</div>
				<div
					className={cn(
						'absolute top-1/2 lg:top-1/2 right-0 hidden lg:block transition-all duration-1000',
						isScrolled ? 'top-0 lg:-top-full' : ''
					)}
				>
					<VectorGlass />
				</div>

				<Button
					variant={'secondary-outline'}
					size={'sm'}
					className="flex gap-4 items-center   mt-8 lg:mt-0 group w-fit "
				>
					<span>Visit website</span>
					<CircularArrowIcon
						width={20}
						height={20}
						className=" stroke-primary-600  fill-none group-hover:stroke-neutral-50 transition-all duration-300"
					/>
				</Button>
			</div>
		</section>
	);
};
