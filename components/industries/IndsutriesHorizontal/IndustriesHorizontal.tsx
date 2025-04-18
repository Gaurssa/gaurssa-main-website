'use client';

import { GCG_EYEWEAR } from '@/constants/industries/industries';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export const IndustriesHorizontal = () => {
	const scrollRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		if (!scrollRef.current) return;

		let scrollAmount = 0;
		const scrollStep = 4; // pixels per step
		const scrollInterval = 8; // ms per step
		const maxScroll = 200; // how much to scroll total

		const interval = setInterval(() => {
			if (scrollRef.current) {
				scrollRef.current.scrollLeft += scrollStep;
				scrollAmount += scrollStep;

				if (scrollAmount >= maxScroll) {
					clearInterval(interval);
				}
			}
		}, scrollInterval);

		return () => clearInterval(interval);
	}, []);

	return (
		<ul
			className="flex px-4 lg:px-20 overflow-x-auto py-10 gap-4 md:gap-6 lg:gap-8 [scrollbar-width:none] "
			ref={scrollRef}
		>
			{GCG_EYEWEAR.map((gcg) => (
				<li
					className="block w-[25rem] md:h-[25rem]  md:min-w-[25rem] md:max-w-[25rem] sm:h-[20rem] sm:min-w-[20rem] sm:max-w-[20rem] h-[14rem] min-w-[14rem] max-w-[14rem] overflow-hidden"
					key={gcg.id}
				>
					<Image
						src={gcg.image}
						alt="GCG Eyewear"
						width={1000}
						height={1000}
						className="w-full h-full object-[20%]  object-cover"
					/>
				</li>
			))}
		</ul>
	);
};
