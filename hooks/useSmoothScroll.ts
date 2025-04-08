import { useEffect, useRef, useState } from 'react';

type UseSmoothScrollSectionsResult = {
	containerRef: React.RefObject<HTMLDivElement | null>;
	setSectionRef: (el: HTMLElement | null, index: number) => void;
};

export const useSmoothScroll = (
	scrollDelay = 500
): UseSmoothScrollSectionsResult => {
	const sectionRefs = useRef<(HTMLElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const isScrolling = useRef(false);

	const scrollToSection = (index: number) => {
		const target = sectionRefs.current[index];
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			setCurrentIndex(index);
		}
	};

	const handleWheel = (e: WheelEvent) => {
		if (isScrolling.current) return;

		isScrolling.current = true;

		const direction = e.deltaY > 0 ? 1 : -1;
		let nextIndex = currentIndex + direction;

		nextIndex = Math.max(
			0,
			Math.min(nextIndex, sectionRefs.current.length - 1)
		);

		if (nextIndex !== currentIndex) {
			scrollToSection(nextIndex);
		}

		setTimeout(() => {
			isScrolling.current = false;
		}, scrollDelay);
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		container.addEventListener('wheel', handleWheel, { passive: false });

		return () => {
			container.removeEventListener('wheel', handleWheel);
		};
	}, [currentIndex]);

	const setSectionRef = (el: HTMLElement | null, index: number) => {
		sectionRefs.current[index] = el;
	};

	return { containerRef, setSectionRef };
};
