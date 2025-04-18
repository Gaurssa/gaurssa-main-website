import { useEffect, useState } from 'react';

export const useScrollingEffect = ({
	scrollingValue = 0,
}: {
	scrollingValue?: number;
}) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > scrollingValue) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return { isScrolled };
};
