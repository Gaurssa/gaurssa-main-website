import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';

// Main NewsCard component that serves as the namespace
export const NewsCard = {
	Root: NewsRoot,
	Header: NewsHeader,
	Link: NewsLink,
	Action: NewsAction,
	Image: NewsImage,
	Content: NewsContent,
	Title: NewsTitle,
	Description: NewsDescription,
	Footer: NewsFooter,
};

// Root component
interface NewsRootProps extends React.ComponentProps<'div'> {
	children: React.ReactNode;
	className?: string;
}

function NewsRoot({ children, className, ...props }: NewsRootProps) {
	return (
		<div
			className={cn(
				'w-full group md:max-w-[35rem] md:min-w-[35rem] md:w-[35rem] sm:max-w-[20rem] sm:min-w-[20rem] sm:w-[20rem] md:h-[42rem]',
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

// Header component
interface NewsHeaderProps extends React.ComponentProps<'h2'> {
	children: React.ReactNode;
	className?: string;
}

function NewsHeader({ children, className, ...props }: NewsHeaderProps) {
	return (
		<h2
			className={cn('text-primary-600 font-medium mb-1', className)}
			{...props}
		>
			{children}
		</h2>
	);
}

// Link component
interface NewsLinkProps extends Omit<LinkProps, 'href'> {
	children: React.ReactNode;
	className?: string;
	href?: string;
}

function NewsLink({
	children,
	className,
	href = '#',
	...props
}: NewsLinkProps) {
	return (
		<Link
			href={href}
			className={cn(
				'relative bg-neutral-50 cursor-pointer hover:shadow-[0px_10px_10px_rgba(0,0,0,0.1)] block transition-shadow duration-300',
				className
			)}
			{...props}
		>
			{children}
		</Link>
	);
}

// Action component for buttons at top corner
interface NewsActionProps extends React.ComponentProps<'div'> {
	children: React.ReactNode;
	className?: string;
}

function NewsAction({ children, className, ...props }: NewsActionProps) {
	return (
		<div className={cn('absolute right-4 top-4', className)} {...props}>
			{children}
		</div>
	);
}

// Image component
interface NewsImageProps extends Omit<ImageProps, 'src' | 'alt'> {
	src: string;
	alt: string;
	className?: string;
}

function NewsImage({
	className,
	src,
	alt = 'news image',
	width = 1000,
	height = 1000,
	...props
}: NewsImageProps) {
	return (
		<div className={cn('h-[14rem] sm:h-[20rem] overflow-hidden', className)}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className="object-center object-cover w-full h-full block"
				{...props}
			/>
		</div>
	);
}

// Content container
interface NewsContentProps extends React.ComponentProps<'div'> {
	children: React.ReactNode;
	className?: string;
}

function NewsContent({ children, className, ...props }: NewsContentProps) {
	return (
		<div
			className={cn(
				'flex justify-between gap-16 sm:gap-32 flex-col p-4 md:p-6 border-x border-b border-gray-200',
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

// Title component
interface NewsTitleProps extends React.ComponentProps<'h3'> {
	children: React.ReactNode;
	className?: string;
}

function NewsTitle({ children, className, ...props }: NewsTitleProps) {
	return (
		<h3
			className={cn(
				'text-gray-950 text-2xl/6 font-normal line-clamp-2',
				className
			)}
			{...props}
		>
			{children}
		</h3>
	);
}

// Description component
interface NewsDescriptionProps extends React.ComponentProps<'p'> {
	children: React.ReactNode;
	className?: string;
}

function NewsDescription({
	children,
	className,
	...props
}: NewsDescriptionProps) {
	return (
		<Text className={cn('line-clamp-2', className)} {...props}>
			{children}
		</Text>
	);
}

// Footer component
interface NewsFooterProps extends React.ComponentProps<'p'> {
	children: React.ReactNode;
	className?: string;
}

function NewsFooter({ children, className, ...props }: NewsFooterProps) {
	return (
		<p
			className={cn(
				'flex items-center gap-2 text-gray-600 font-light text-[12px] md:text-sm',
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
}
