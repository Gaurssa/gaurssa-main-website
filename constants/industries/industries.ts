// lib/data.ts

export interface IndustriesType {
	slug: string;
	name: string;
	description?: string;
	companies: CompaniesType[];
}

export interface CompaniesType {
	slug: string;
	name: string;
	description: string;
	image: string;
	logo: string;
}

export const COMPANIES: CompaniesType[] = [
	{
		name: 'Anthropose',
		slug: 'anthropose',
		description: 'Leading eyewear retailer.',
		logo: '/industries/anthropose-logo.png',
		image: '/industries/bg-anthropose.png',
	},
	{
		name: 'Vision Craft',
		slug: 'vision-craft',
		description: 'Trendy glasses and lenses.',
		logo: '/industries/vision-craft-logo.png',
		image: '/industries/bg-vision-craft.png',
	},
	{
		name: 'Urban Frames',
		slug: 'urban-frames',
		description: 'Trendy glasses and lenses.',
		logo: '/industries/urban-frames-logo.png',
		image: '/industries/bg-urbanframes.jpeg',
	},
	{
		name: 'Titan Nepal',
		slug: 'titan-nepal',
		description: 'Trendy glasses and lenses.',
		logo: '/industries/titan-nepal-logo.png',
		image: '/industries/bg-titan-nepal.png',
	},
	{
		name: 'GCG Eyeware',
		slug: 'gcg-eyeware',
		description: 'Leading eyewear retailer.',
		logo: '/industries/gcg-eyeware-logo.png',
		image: '/industries/bg-titan-nepal.png',
	},
];

export const INDUSTRIES: IndustriesType[] = [
	{
		slug: 'eyeware',
		name: 'Eyeware',
		companies: [
			{
				name: 'GCG Eyeware',
				slug: 'gcg-eyeware',
				description: 'Leading eyewear retailer.',
				logo: '/industries/gcg-eyeware.png',
				image: '/industries/bg-titan-nepal.png',
			},
			{
				name: 'Vision Craft',
				slug: 'vision-craft',
				description: 'Trendy glasses and lenses.',
				logo: '/industries/gcg-eyeware.png',
				image: '/industries/bg-vision-craft.png',
			},
			{
				name: 'Urban Frames',
				slug: 'urban-frames',
				description: 'Trendy glasses and lenses.',
				logo: '/industries/gcg-eyeware.png',
				image: '/industries/bg-urbanframes.jpeg',
			},
			{
				name: 'Titan Nepal',
				slug: 'titan-nepal',
				description: 'Trendy glasses and lenses.',
				logo: '/industries/gcg-eyeware.png',
				image: '/industries/bg-titan-nepal.png',
			},
		],
	},
	{
		slug: 'textile',
		name: 'Textile',
		companies: [
			{
				slug: 'uniqlo',
				name: 'Uniqlo',
				description: 'Quality apparel for everyday life.',
				logo: '/industries/gcg-eyeware.png',
				image: '/industries/bg-titan-nepal.png',
			},
			{
				slug: 'zara',
				name: 'Zara',
				description: 'Fast fashion at its finest.',
				image: '/industries/gcg-eyeware.png',
				logo: '/industries/bg-titan-nepal.png',
			},
		],
	},
];
