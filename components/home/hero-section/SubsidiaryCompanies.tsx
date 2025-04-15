import Image from 'next/image';
import Link from 'next/link';

const SUBSIDIARY_DATA = [
	{
		id: 1,
		name: 'Hills and Cloud',
		image: '/home/hills-and-cloud.png',
		link: '#',
	},
	{
		id: 2,
		name: 'Karma',
		image: '/home/karma.png',
		link: '#',
	},
	{
		id: 3,
		name: 'Scape',
		image: '/home/scape.png',
		link: '#',
	},
	{
		id: 4,
		name: 'Try Next',
		image: '/home/try-next.png',
		link: '#',
	},
	{
		id: 5,
		name: 'Woolmandu',
		image: '/home/woolmandu.png',
		link: '#',
	},
];

export const SubsidiaryCompanies = () => {
	const companies = () => {
		return SUBSIDIARY_DATA.map((data) => (
			<li className="inline-flex items-center" key={data.id}>
				<Link href={data.link} className="block w-24 h-auto">
					<Image
						src={data.image}
						alt={data.name}
						width={1000}
						height={1000}
						className="w-full h-full object-contain"
					/>
				</Link>
			</li>
		));
	};
	return (
		<div className="flex gap-8 items-center w-full overflow-hidden ">
			<div className="marquee group">
				<ul
					className="
my-4 flex justify-between gap-16 marquee-content"
				>
					{companies()}
					{companies()}
					{companies()}
					{companies()}
					{companies()}
					{companies()}
				</ul>
			</div>
		</div>
	);
};
