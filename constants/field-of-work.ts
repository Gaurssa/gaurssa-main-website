export interface FieldOfWorkType {
	id: number;
	title: string;
	subtitle: string;
	description: string;
	image: string;
	link: string;
}

export const FIELD_OF_WORK: FieldOfWorkType[] = [
	{
		id: 1,
		title: 'Eyeware',
		subtitle: 'Style for Every Preference',
		description:
			'GCG Eyewear combines precision, style, and functionality in every frame. Find the perfect pair to enhance your style.',
		image: '/home/chasmis-girl.avif',
		link: '#',
	},
	{
		id: 2,
		title: 'Healthcare',
		subtitle: 'Quality Care for a Healthier Future',
		description:
			'GCG Healthcare delivers innovative solutions to enhance well-being, prioritizing quality and care in every service.',
		image: '/home/chasmis-girl.avif',
		link: '#',
	},

	{
		id: 3,
		title: 'Textile',
		subtitle: 'Weaving Quality Crafting Comfort',
		description:
			'GCG Textile believes in trendy and comfortable clothing for every occasion and style, meeting customer preferences.',
		image: '/home/chasmis-girl.avif',
		link: '#',
	},
	{
		id: 4,
		title: 'Automative',
		subtitle: 'Driving Dreams, Fulfilling Desires',
		description:
			'GCG Automotive delivers performance vehicles that combine innovation, reliability, and style, tailored to meet every need.',
		image: '/home/chasmis-girl.avif',
		link: '#',
	},
	{
		id: 5,
		title: 'Energy',
		subtitle: 'Energy from Nature, Power for the Future',
		description:
			'GCG Hydropower harnesses nature’s renewable energy, driving sustainability and fostering a greener future.',
		image: '/home/chasmis-girl.avif',
		link: '#',
	},
];
