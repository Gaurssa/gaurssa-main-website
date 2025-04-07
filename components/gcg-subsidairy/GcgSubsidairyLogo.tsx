import Image from 'next/image';

const SUBSIDAIRY_LOGO = [
	{
		id: 1,
		name: 'Logo 1',
		image: '/home/logo-1.png',
	},
	{
		id: 2,
		name: 'Logo 2',
		image: '/home/logo-2.png',
	},
	{
		id: 3,
		name: 'Logo 3',
		image: '/home/logo-3.png',
	},
	{
		id: 4,
		name: 'Logo 4',
		image: '/home/logo-4.png',
	},
];

export const GcgSubsidairyLogo = () => {
	return (
		<ul className="flex gap-4 justify-between items-center ">
			{SUBSIDAIRY_LOGO.map((logo) => (
				<li key={logo.id} className="block w-[8rem]">
					<Image
						src={logo.image}
						className=""
						width={500}
						height={500}
						alt={logo.name}
					/>
				</li>
			))}
		</ul>
	);
};
