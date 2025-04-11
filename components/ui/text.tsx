import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const textVariants = cva('font-outfit', {
	variants: {
		variant: {
			primary: 'text-gray-800  font-light',
			secondary: 'text-gray-600 text-sm font-light ',
			neutral: 'text-gray-200 font-light',
		},
		size: {
			sm: 'text-sm',
			base: 'text-base/[150%]',
			lg: 'text-sm md:text-base',
			xl: 'text-base md:text-xl',
		},
	},

	defaultVariants: {
		size: 'base',
		variant: 'primary',
	},
});

export interface TextProps
	extends React.ComponentProps<'p'>,
		VariantProps<typeof textVariants> {
	asChild?: boolean;
	className?: string;
}

export const Text = ({
	asChild,
	className,
	variant,
	size,
	...props
}: TextProps) => {
	const Comp = (asChild ? Slot : 'p') as React.ElementType;
	return (
		<Comp
			className={cn(textVariants({ variant, size }), className)}
			{...props}
		/>
	);
};
