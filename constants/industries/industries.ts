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
	logoWhite: string | null;
}

export const COMPANIES: CompaniesType[] = [
	{
		name: 'Anthropose',
		slug: 'anthropose',
		description: 'Leading eyewear retailer.',
		logo: '/industries/eyewear/anthropose-logo.png',
		image: '/industries/eyewear/bg-anthropose.png',
		logoWhite: null,
	},
	{
		name: 'Vision Craft',
		slug: 'vision-craft',
		description: 'Trendy glasses and lenses.',
		logo: '/industries/eyewear/vision-craft-logo.png',
		image: '/industries/eyewear/bg-vision-craft.png',
		logoWhite: null,
	},
	{
		name: 'Urban Frames',
		slug: 'urban-frames',
		description: 'Trendy glasses and lenses.',
		logo: '/industries/eyewear/urban-frames-logo.png',
		image: '/industries/eyewear/bg-urbanframes.jpeg',
		logoWhite: '/industries/eyewear/urban-frames-white-logo.png',
	},
	{
		name: 'Titan Nepal',
		slug: 'titan-nepal',
		description: 'Trendy glasses and lenses.',
		logo: '/industries/eyewear/titan-nepal-logo.png',
		image: '/industries/eyewear/bg-titan-nepal.png',
		logoWhite: '/industries/eyewear/titan-nepal-white-logo.png',
	},
	{
		name: 'GCG Eyewear',
		slug: 'gcg-eyewear',
		description: 'Leading eyewear retailer.',
		logo: '/industries/eyewear/gcg-eyewear-logo.png',
		image: '/industries/eyewear/bg-titan-nepal.png',
		logoWhite: '/industries/eyewear/gcg-eyewear-logo-original.png',
	},
];

export const GCG_EYEWEAR_GALLERY = [
	{
		id: 1,
		image: '/industries/gcg-eyewear/gcg-eyewear-6.jpeg',
		className: 'row-start-1 -row-end-1',
	},
	{
		id: 2,
		image: '/industries/gcg-eyewear/gcg-eyewear-7.jpeg',
		className: 'row-start-1 row-end-5 top-56',
	},
	{
		id: 3,
		image: '/industries/gcg-eyewear/gcg-eyewear-7.jpeg',
		className: 'row-start-1 row-end-3 top-64 ',
	},
];

export const GCG_EYEWEAR = [
	{
		id: 1,
		image: '/industries/gcg-eyewear/gcg-eyewear-1.jpeg',
	},
	{
		id: 2,
		image: '/industries/gcg-eyewear/gcg-eyewear-2.jpeg',
	},
	{
		id: 3,
		image: '/industries/gcg-eyewear/gcg-eyewear-3.jpeg',
	},
	{
		id: 4,
		image: '/industries/gcg-eyewear/gcg-eyewear-4.jpeg',
	},
	{
		id: 5,
		image: '/industries/gcg-eyewear/gcg-eyewear-5.jpeg',
	},
];

// export const INDUSTRIES: IndustriesType[] = [
// 	{
// 		slug: 'eyewear',
// 		name: 'Eyewear',
// 		companies: [
// 			{
// 				name: 'GCG Eyewear',
// 				slug: 'gcg-eyewear',
// 				description: 'Leading eyewear retailer.',
// 				logo: '/industries/eyewear/gcg-eyewear.png',
// 				image: '/industries/eyewear/bg-titan-nepal.png',
// 				logoWhite: '/industries/eyewear/titan-nepal-white-logo.png',
// 			},
// 			{
// 				name: 'Vision Craft',
// 				slug: 'vision-craft',
// 				description: 'Trendy glasses and lenses.',
// 				logo: '/industries/eyewear/gcg-eyewear.png',
// 				image: '/industries/eyewear/bg-vision-craft.png',
// 				logoWhite: null,
// 			},
// 			{
// 				name: 'Urban Frames',
// 				slug: 'urban-frames',
// 				description: 'Trendy glasses and lenses.',
// 				logo: '/industries/eyewear/gcg-eyewear.png',
// 				image: '/industries/eyewear/bg-urbanframes.jpeg',
// 				logoWhite: '/industries/eyewear/urban-frames-white-logo.png',
// 			},
// 			{
// 				name: 'Titan Nepal',
// 				slug: 'titan-nepal',
// 				description: 'Trendy glasses and lenses.',
// 				logo: '/industries/eyewear/gcg-eyewear.png',
// 				image: '/industries/eyewear/bg-titan-nepal.png',
// 				logoWhite: null,
// 			},
// 		],
// 	},
// 	{
// 		slug: 'textile',
// 		name: 'Textile',
// 		companies: [
// 			{
// 				slug: 'uniqlo',
// 				name: 'Uniqlo',
// 				description: 'Quality apparel for everyday life.',
// 				logo: '/industries/eyewear/gcg-eyewear.png',
// 				image: '/industries/eyewear/bg-titan-nepal.png',
// 				logoWhite: null,
// 			},
// 			{
// 				slug: 'zara',
// 				name: 'Zara',
// 				description: 'Fast fashion at its finest.',
// 				image: '/industries/eyewear/gcg-eyewear.png',
// 				logo: '/industries/eyewear/bg-titan-nepal.png',
// 				logoWhite: null,
// 			},
// 		],
// 	},
// ];
