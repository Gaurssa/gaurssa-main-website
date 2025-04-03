import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const appTitleVariants = cva('', {
	variants: {
		variant: {
			default: 'font-dm-serif text-black',
			secondary: 'font-bold',
		},
		size: {
			default: 'text-4xl',
			sm: 'text-2xl',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface AppTitleProps
	extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'ref'>,
		VariantProps<typeof appTitleVariants> {
	as?: 'h1' | 'h2' | 'h3' | 'h4';
	title: string;
	className?: string;
}

export const AppTitle = ({
	title,
	className = '',
	as: Component = 'h2',
	variant,
	size,
	...props
}: AppTitleProps) => {
	return (
		<Component
			className={`${appTitleVariants({ variant, size })} ${className}`}
			{...props}
		>
			{title}
		</Component>
	);
};
