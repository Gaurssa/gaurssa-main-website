'use client';

import { cn } from '@/utils/utils';
import Link from 'next/link';

interface NextLinkProps extends Omit<React.ComponentProps<'a'>, 'ref'> {
	page: string;
	ref?: React.RefObject<'a'>;
}

export const NextLink = ({ page, ref, className, ...props }: NextLinkProps) => {
	console.log('Hello hi');
	return (
		<Link
			className={cn(className)}
			href={page || '#'}
			{...props}
			ref={ref as never}
		/>
	);
};
