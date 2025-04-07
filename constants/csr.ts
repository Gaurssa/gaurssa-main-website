export interface CSRDataType {
	id: number;
	stats: string;
	description: string;
	image: string;
}

export const CSR_DATA: CSRDataType[] = [
	{
		id: 1,
		stats: '20% -> 50%',
		description: 'Diseases prevention rate',
		image: '/home/nivaran-1.jpeg',
	},
	{
		id: 2,
		stats: '300 -> 10,000',
		description: 'Patient treated daily',
		image: '/home/nivaran-2.jpeg',
	},
	{
		id: 3,
		stats: 'All Over Nepal',
		description: 'Population coverage',
		image: '/home/nivaran-3.jpeg',
	},
];
