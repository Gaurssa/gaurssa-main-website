import * as React from 'react';

type ComparisonType = 'max' | 'min';

export function useScreenSize(
	breakpoint: number,
	comparison: ComparisonType = 'max'
) {
	const [matches, setMatches] = React.useState<boolean | undefined>(undefined);

	React.useEffect(() => {
		// For max-width, we check if width is less than or equal to breakpoint
		// For min-width, we check if width is greater than or equal to breakpoint
		const mediaQuery =
			comparison === 'max'
				? `(max-width: ${breakpoint}px)`
				: `(min-width: ${breakpoint}px)`;

		const mql = window.matchMedia(mediaQuery);

		const onChange = (e: MediaQueryListEvent) => {
			setMatches(e.matches);
		};

		// Initial check
		setMatches(mql.matches);

		mql.addEventListener('change', onChange);

		return () => mql.removeEventListener('change', onChange);
	}, [breakpoint, comparison]);

	return !!matches;
}

// // Example usage:
// export function useIsMobile(breakpoint = 768) {
//   return useScreenSize(breakpoint - 1, "max")
// }

// export function useIsDesktop(breakpoint = 768) {
//   return useScreenSize(breakpoint, "min")
// }

// // You can also create custom named hooks for specific breakpoints
// export function useIsTablet(minBreakpoint = 768, maxBreakpoint = 1024) {
//   const isMin = useScreenSize(minBreakpoint, "min")
//   const isMax = useScreenSize(maxBreakpoint - 1, "max")
//   return isMin && isMax
// }
