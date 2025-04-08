'use client';

import { ArrowDownIcon } from '@/assets/icons/ArrowDownIcon';
import { useEffect, useState } from 'react';

export const ScrollVisualCue = () => {
	const [showScrollCue, setShowScrollCue] = useState(false);
	useEffect(() => {
		function handleScrollCue() {
			if (window.scrollY > 0) setShowScrollCue(true);
			else setShowScrollCue(false);
		}

		handleScrollCue();

		window.addEventListener('scroll', handleScrollCue);
		return () => window.removeEventListener('scroll', handleScrollCue);
	}, []);

	return (
		<div
			className={`self-end  px-10 md:px-20  flex flex-col items-center transition-all duration-300 ${showScrollCue ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}
		>
			<p className="font-solitreo text-xl sm:text-2xl text-neutral-50/50">
				Scroll Down
			</p>
			<span className="h-12 w-8 rounded-full border border-neutral-50/50 flex items-center justify-center overflow-hidden">
				<span className="text-neutral-50 infinite-drop block">
					<ArrowDownIcon className="h-8 w-8 stroke-white/50" />
				</span>
			</span>
		</div>
	);
};
