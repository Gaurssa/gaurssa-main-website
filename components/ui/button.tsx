import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none  outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  duration-300 rounded-full font-outfit group cursor-pointer',
	{
		variants: {
			variant: {
				default:
					'bg-primary-800 text-neutral-50 hover:bg-primary-700   font-medium',
				primary:
					'bg-primary-200 text-primary-600 hover:text-primary-200 hover:bg-primary-600 w-fit font-normal text-sm',
				// Primary outline
				'primary-outline':
					'border border-primary-600 hover:border-transparent hover:bg-primary-600 hover:text-neutral-50 text-primary-600 font-normal',
				secondary:
					'bg-primary-600  hover:bg-primary-200 hover:text-primary-600 text-neutral-50 font-normal text-[16px]',
				// Bordered primary button
				'bordered-primary':
					'border border-gray-400 bg-transparent hover:bg-primary-400 hover:text-neutral-50 hover:border-primary-400 text-gray-400 font-normal',
				ghost:
					'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 px-8 py-2 has-[>svg]:px-3',
				sm: '  gap-1.5 px-6  py-2',
				lg: 'h-10  px-6 has-[>svg]:px-4',
				xsm: 'px-2 py-1',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
